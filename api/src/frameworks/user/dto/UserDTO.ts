import { PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import { Address } from '../model/address.model';

export class ReadUserDto {
    username: string;

    password: string;

    firstname: string;

    lastname: string;

    email: string;

    phone: string;

    @IsNotEmpty()
    addresses: Address[];

    accessToken: string;

    roles: string[];
}

export class CreateUserDto extends PartialType(ReadUserDto) {
    @IsNotEmpty()
    @Matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/ , {
        message: 'Email Not Valid !'
    })
    email: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(12)
    username: string;

    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,20}$/, {
        message: 'Password must have minimum 8 characters and no longer 20 characters, At least one uppercase and lowercase English letter, least one digit, least one special character. '
    })
    password: string;
}

export class UpdateUserDto extends PartialType(ReadUserDto) {
}
