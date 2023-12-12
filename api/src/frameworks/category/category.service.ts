import { Injectable } from "@nestjs/common";
import { GenericRepository, IGenericRepository } from "src/interfaces";
import { Category, CategoryDocument } from "./model/category.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CategoryDTO } from "./dto/categoryDTO.dto";

@Injectable()
export class CategoryService{
    private readonly _categoryRepository : IGenericRepository<Category>;

    constructor(
        @InjectModel(Category.name) private readonly categoryModel : Model<CategoryDocument>,
    ){
        this._categoryRepository = new GenericRepository<Category>(categoryModel);
    }

    create(category: CategoryDTO): Promise<Category> {
        return this._categoryRepository.add(category);
    }

    findAll(): Promise<Category[]> {
        return this.categoryModel.find().populate('products');
    }

    findOne(type_id: string): Promise<Category> {
        return this._categoryRepository.get(type_id);
    }

    update(type_id: string, category: Category): Promise<any> {
        return this._categoryRepository.update(type_id, category);
    }

    remove(type_id: string): Promise<any> {
        return this._categoryRepository.delete(type_id);
    }
}