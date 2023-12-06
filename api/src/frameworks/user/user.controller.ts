import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ReadUserDto, UpdateUserDto } from './dto/UserDTO';
import mongoose, { Types } from 'mongoose';

@Controller('api/user')
export class UserController {
  constructor(private readonly _userService: UserService) { }

  @Post()
  create(@Body() userDto: CreateUserDto): Promise<ReadUserDto> {
    // console.log(userDto);
    return this._userService.create(userDto);
  }

  @Get()
  findAll(): Promise<ReadUserDto[]> {
    return this._userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') userId: string): Promise<ReadUserDto> {
    if (Types.ObjectId.isValid(userId)) {
      const user = await this._userService.findOne(userId);
      if (user)
        return user;
      else
        throw new NotFoundException(`Not found user with ID : ${userId}`);
    }
    throw new NotFoundException(`Invalid user with ID : ${userId}`);
  }

  @Patch(':id')
  update(@Param('id') userId: string, @Body() userDto: UpdateUserDto): Promise<ReadUserDto> {
    return this._userService.update(userId, userDto);
  }

  @Delete(':id')
  remove(@Param('id') userId: string) {
    return this._userService.remove(userId);
  }
}
