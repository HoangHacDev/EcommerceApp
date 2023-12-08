import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Category } from 'src/frameworks';

export class ReadProductDto {
    name: string;

    title: string

    desc: string;

    size: string;

    price: number;

    quantity : number;

    category : Category;
}

export class CreateProductDto extends PartialType(ReadProductDto) {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    desc: string;

    @IsNotEmpty()
    category : Category;
}

export class UpdateProductDto extends PartialType(ReadProductDto) {
}
