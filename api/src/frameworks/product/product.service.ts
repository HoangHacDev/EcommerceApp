import { Injectable } from "@nestjs/common";
import { Product, ProductDocument } from "./model/product.model";
import { GenericRepository, IGenericRepository } from "src/interfaces";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { Category, CategoryDocument } from '../category/model/category.model';
import { ProductFactoryService } from "./factory/productFactory.service";
import { CreateProductDto, ReadProductDto, UpdateProductDto } from "./dto/productDTO.dto";

@Injectable()
export class ProductService {
    // * Dependency Injection
    private readonly _productRepository: IGenericRepository<Product>;

    // * Jnject to contructor
    constructor(
        // * Call Model with decorator @InjectModel
        @InjectModel(Product.name) private readonly productModel: Model<ProductDocument>,
        @InjectModel(Category.name) private readonly categoryModel: Model<CategoryDocument>,
        // * Inject userFactory
        private _productFactoryService: ProductFactoryService) {
        // * initial User base Repository
        this._productRepository = new GenericRepository<Product>(productModel);
    }

    create(productDTO: CreateProductDto): Promise<ReadProductDto> {
        const product = this._productFactoryService.addProduct(productDTO);
        return this._productRepository.add(product);
    }

    addToCategory(cate_id : string, product : Product){
        const update = this.categoryModel.findByIdAndUpdate(cate_id, {
            $push:{
                products: product
            }
        });
        return update;
    }

    findAll(): Promise<ReadProductDto[]> {
        return this._productRepository.getAll();
    }

    findOne(productId: string): Promise<ReadProductDto> {
        return this._productRepository.get(productId);
    }

    update(productId: string, productDTO: UpdateProductDto): Promise<any> {
        const user = this._productFactoryService.updateProduct(productDTO);
        return this._productRepository.update(productId, user);
    }

    remove(productId: string): Promise<any> {
        return this._productRepository.delete(productId);
    }
}