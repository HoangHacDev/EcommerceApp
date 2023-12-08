import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { ProductService } from "./product.service";
import { CreateProductDto, ReadProductDto, UpdateProductDto } from './dto/productDTO.dto';
import { ResponseMessage, TransformationInterceptor } from 'src/middlewares';


@UseInterceptors(TransformationInterceptor)
@Controller('api/product')
export class ProductController {
    constructor(private readonly _productService: ProductService) { }

    @Post()
    @ResponseMessage('Product Create Succesfully')
    create(@Body() productDTO: CreateProductDto): Promise<ReadProductDto> {
        console.log(productDTO);
        return this._productService.create(productDTO);
    }

    @Get()
    @ResponseMessage('Products fetched Succesfully')
    findAll(): Promise<ReadProductDto[]> {
        return this._productService.findAll();
    }

    @Get(':id')
    @ResponseMessage('Product fetched Succesfully')
    findOne(@Param('id') productId: string): Promise<ReadProductDto> {
        return this._productService.findOne(productId);
    }

    @Patch(':id')
    // @ResponseMessage('Update Product Succesfully')
    update(@Param('id') productId: string, @Body() productDTO: UpdateProductDto): Promise<any> {
        return this._productService.update(productId, productDTO);
    }

    @Delete(':id')
    // @ResponseMessage('Delete User Succesfully')
    remove(@Param('id') productId: string): Promise<any> {
        return this._productService.remove(productId);
    }
}