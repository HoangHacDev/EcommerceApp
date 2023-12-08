import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ReadUserDto {
    username: string;

    password: string;

    firstname: string;

    lastname: string;

    email: string;

    phone: string;

    address: string;

    roles : string[];
}

export class CreateUserDto extends PartialType(ReadUserDto) {
    @IsNotEmpty()
    username: string;
    
    @IsNotEmpty()
    password: string;
}

export class UpdateUserDto extends PartialType(ReadUserDto) {
}
