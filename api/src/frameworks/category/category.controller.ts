import { Body, Controller, Get, Param, Patch, Post, Delete, UseInterceptors } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ObjectIdNotFoundException, ObjectIdValidException, ResponseMessage, TransformationInterceptor } from "src/middlewares";
import { Category } from "./model/category.model";
import { Types } from "mongoose";
import { CategoryDTO } from "./dto/categoryDTO.dto";
import { ValueMessage } from "src/enum/value.enum";

@UseInterceptors(TransformationInterceptor)
@Controller('api/type-product')
export class CategoryController {
    constructor(private readonly _categoryService: CategoryService) { }

    @Post()
    @ResponseMessage('TypeProduct Create Succesfully')
    create(@Body() category: CategoryDTO): Promise<Category> {
        return this._categoryService.create(category);
    }

    @Get()
    @ResponseMessage('TypeProducts fetched Succesfully')
    findAll(): Promise<Category[]> {
        return this._categoryService.findAll();
    }

    @Get(':id')
    @ResponseMessage('TypeProduct fetched Succesfully')
    async findOne(@Param('id') type_id: string): Promise<Category> {
        if (Types.ObjectId.isValid(type_id)) {
            let category = await this._categoryService.findOne(type_id);
            if (category) {
                return category;
            }
            else {
                throw new ObjectIdNotFoundException(type_id, ValueMessage.CATEGORY);
            }
        }
        throw new ObjectIdValidException(type_id, ValueMessage.CATEGORY);
    }

    @Patch(':id')
    @ResponseMessage('Update TypeProduct Succesfully')
    async update(@Param('id') type_id: string, @Body() categoryModel: Category): Promise<any> {
        if (Types.ObjectId.isValid(type_id)) {
            let category = await this._categoryService.findOne(type_id);
            if (category) {
                return this._categoryService.update(type_id, categoryModel);
            }
            else {
                throw new ObjectIdNotFoundException(type_id, ValueMessage.CATEGORY);
            }
        }
        throw new ObjectIdValidException(type_id, ValueMessage.CATEGORY);
    }

    @Delete(':id')
    @ResponseMessage('Delete TypeProduct Succesfully')
    async remove(@Param('id') type_id: string): Promise<any> {
        if (Types.ObjectId.isValid(type_id)) {
            let category = await this._categoryService.findOne(type_id);
            if (category) {
                return this._categoryService.remove(type_id);
            }
            else {
                throw new ObjectIdNotFoundException(type_id, ValueMessage.CATEGORY);
            }
        }
        throw new ObjectIdValidException(type_id, ValueMessage.CATEGORY);
    }
}