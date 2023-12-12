import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/user.module';
import { JwtStrategy } from './guard/jwt.strategy';
import { RolesGuard } from './guard/roles.guard';
import { User, UserSchema } from '../user/model/user.model';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserFactoryService } from '../user/factory/userFactory.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name, schema: UserSchema
      }
    ]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async ( configService : ConfigService) => ({
        secret: configService.get<string>('JWTSECRET'),
        signOptions: { expiresIn: '30m' }, // e.g. 30s, 7d, 24h
      }),
      inject: [ConfigService],
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RolesGuard, UserFactoryService],
})
export class AuthModule {}
