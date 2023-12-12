//src/auth/dto/login.dto.ts
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ReadUserDto } from 'src/frameworks';

export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}

export class RegisterDTO extends PartialType(ReadUserDto) {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  email: string;
  
  @IsNotEmpty()
  password: string;
}