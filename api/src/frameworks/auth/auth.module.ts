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

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name, schema: UserSchema
      }
    ]),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWTSECRET,
      signOptions: { expiresIn: '5m' }, // e.g. 30s, 7d, 24h
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, RolesGuard],
})
export class AuthModule {}
