import { Body, Controller, Get, Param, Patch, Post, Delete, UseInterceptors } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ResponseMessage, TransformationInterceptor } from "src/middlewares";
import { Category } from "./model/category.model";

@UseInterceptors(TransformationInterceptor)
@Controller('api/type-product')
export class CategoryController {
    constructor(private readonly _categoryService: CategoryService) { }

    @Post()
    @ResponseMessage('Product Create Succesfully')
    create(@Body() category: Category): Promise<Category> {
        // console.log(category);
        return this._categoryService.create(category);
    }

    @Get()
    @ResponseMessage('Products fetched Succesfully')
    findAll(): Promise<Category[]> {
        return this._categoryService.findAll();
    }

    @Get(':id')
    @ResponseMessage('Product fetched Succesfully')
    findOne(@Param('id') type_id: string): Promise<Category> {
        return this._categoryService.findOne(type_id);
    }

    @Patch(':id')
    // @ResponseMessage('Update Product Succesfully')
    update(@Param('id') type_id: string, @Body() category: Category): Promise<any> {
        return this._categoryService.update(type_id, category);
    }

    @Delete(':id')
    // @ResponseMessage('Delete User Succesfully')
    remove(@Param('id') type_id: string): Promise<any> {
        return this._categoryService.remove(type_id);
    }
}