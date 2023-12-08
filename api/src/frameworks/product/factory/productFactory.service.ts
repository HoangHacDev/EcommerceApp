import { Injectable } from "@nestjs/common";
import { CreateProductDto, UpdateProductDto } from "../dto/productDTO.dto";
import { ProductEntity } from "../entity/productEntity.entity";

@Injectable()
export class ProductFactoryService {
    addProduct(productDTO: CreateProductDto) {
        const product = new ProductEntity();
        product.name = productDTO.name;
        product.desc = productDTO.desc;
        product.type_id = productDTO.type_id;
        product.title = "";
        product.size = "";
        product.price = 0;
        product.quantity = 0;

        return product;
    }

    updateProduct(productDTO: UpdateProductDto) {
        const product = new ProductEntity();
        product.name = productDTO.name;
        product.desc = productDTO.desc;
        product.type_id = productDTO.type_id;
        product.title = "";
        product.size = "";
        product.price = 0;
        product.quantity = 0;

        return product;
    }
}