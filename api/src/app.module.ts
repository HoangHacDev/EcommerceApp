import { Module } from '@nestjs/common';
import { CoreMongoModule } from './databases/mongodb/mongo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './frameworks';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CoreMongoModule,
    UserModule
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
