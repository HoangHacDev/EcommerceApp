import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ReadProductDto {
    name: string;

    title: string

    desc: string;

    size: string;

    price: number;

    quantity : number;

    type_id: string;
}

export class CreateProductDto extends PartialType(ReadProductDto) {
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    desc: string;

    @IsNotEmpty()
    type_id: string;
}

export class UpdateProductDto extends PartialType(ReadProductDto) {
}
