import { Module } from '@nestjs/common';
import { CoreMongoModule } from './databases/mongodb/mongo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule, ProductModule } from './frameworks';
import { CategoryModule } from './frameworks/category/category.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CoreMongoModule,
    UserModule,
    ProductModule,
    CategoryModule
  ],
  controllers: [],
  providers: [ConfigService],
})
export class AppModule {}
