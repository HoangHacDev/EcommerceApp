import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UseGuards } from '@nestjs/common';
import { ProductService } from "./product.service";
import { CreateProductDto, ReadProductDto, UpdateProductDto } from './dto/productDTO.dto';
import { ObjectIdNotFoundException, ObjectIdValidException, ResponseMessage, TransformationInterceptor } from 'src/middlewares';
import { Types } from 'mongoose';
import { Product } from './model/product.model';
import { Role } from '../auth/enum/role.enum';
import { Roles } from '../auth/decorators/roles.decorator';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guard/jwt-auth.guard';
import { RolesGuard } from '../auth/guard/roles.guard';


@UseInterceptors(TransformationInterceptor)
@Controller('api/product')
export class ProductController {
    constructor(
        private readonly _productService: ProductService,
    ) { }

    @Post(':id')
    @ResponseMessage('Product Create Succesfully')
    async create(@Param('id') categoryId: string, @Body() productDTO: CreateProductDto): Promise<Product> {
        const product = await this._productService.create(productDTO);
        await this._productService.addToCategory(categoryId, product);
        return product;
    }

    @Get()
    @Roles(Role.ADMIN)
    @UseGuards(JwtAuthGuard, RolesGuard)
    @ApiBearerAuth()
    @ResponseMessage('Products fetched Succesfully')
    findAll(): Promise<ReadProductDto[]> {
        return this._productService.findAll();
    }

    @Get(':id')
    @ResponseMessage('Product fetched Succesfully')
    async findOne(@Param('id') productId: string): Promise<ReadProductDto> {
        if (Types.ObjectId.isValid(productId)) {
            const user = await this._productService.findOne(productId);
            if (user) {
                return this._productService.findOne(productId);
            }
            else {
                throw new ObjectIdNotFoundException(productId);
            }
        }
        throw new ObjectIdValidException(productId);
    }

    @Patch(':id')
    @ResponseMessage('Update Product Succesfully')
    async update(@Param('id') productId: string, @Body() productDTO: UpdateProductDto): Promise<any> {
        if (Types.ObjectId.isValid(productId)) {
            const user = await this._productService.findOne(productId);
            if (user) {
                return this._productService.update(productId, productDTO);

            }
            else {
                throw new ObjectIdNotFoundException(productId);
            }
        }
        throw new ObjectIdValidException(productId);
    }

    @Delete(':id')
    @ResponseMessage('Delete Product Succesfully')
    async remove(@Param('id') productId: string): Promise<any> {
        if (Types.ObjectId.isValid(productId)) {
            const user = await this._productService.findOne(productId);
            if (user) {
                return this._productService.remove(productId);
            }
            else {
                throw new ObjectIdNotFoundException(productId);
            }
        }
        throw new ObjectIdValidException(productId);
    }
}