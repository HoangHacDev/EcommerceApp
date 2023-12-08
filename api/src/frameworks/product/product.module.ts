import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Product, ProductSchema } from "./model/product.model";
import { ProductController } from "./product.controller";
import { ProductService } from "./product.service";
import { ProductFactoryService } from "./factory/productFactory.service";


@Module({
    imports:[
      MongooseModule.forFeature([
        {
          name: Product.name, schema: ProductSchema
        }
      ])
    ],
    controllers: [ProductController],
    providers: [ProductService, ProductFactoryService],
  })
  export class ProductModule {}
  