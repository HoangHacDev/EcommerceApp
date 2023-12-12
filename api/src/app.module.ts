import { Module } from '@nestjs/common';
import { CoreMongoModule } from './databases/mongodb/mongo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule, ProductModule, CategoryModule, AuthModule } from './frameworks';
import { CartModule } from './frameworks/cart/cart.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CoreMongoModule,
    UserModule,
    ProductModule,
    CategoryModule,
    AuthModule,
    CartModule
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule { }
