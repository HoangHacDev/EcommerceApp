import { PartialType } from '@nestjs/swagger';

export class ReadUserDto {
    username: string;

    // password: string;

    firstname: string;

    lastname: string;

    email: string;

    phone: string;

    address: string;
}

export class CreateUserDto extends PartialType(ReadUserDto) {
    username: string;
    
    password: string;
}

export class UpdateUserDto extends PartialType(ReadUserDto) {
}
