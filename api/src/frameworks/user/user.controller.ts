import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, ReadUserDto, UpdateUserDto } from './dto/UserDTO';
import { Types } from 'mongoose';
import { ResponseMessage, TransformationInterceptor, ObjectIdNotFoundException, ObjectIdValidException } from 'src/middlewares';
import { ValueMessage } from 'src/enum/value.enum';


@UseInterceptors(TransformationInterceptor)
@Controller('api/user')
export class UserController {
  constructor(
    private readonly _userService: UserService,
  ) { }

  @Post()
  @ResponseMessage('User Create Succesfully')
  async create(@Body() userDto: CreateUserDto): Promise<ReadUserDto> {
    return this._userService.create(userDto);
  }

  @Get()
  @ResponseMessage('Users fetched Succesfully')
  findAll(): Promise<ReadUserDto[]> {
    return this._userService.findAll();
  }

  @Get(':id')
  @ResponseMessage('User fetched Succesfully')
  async findOne(@Param('id') userId: string): Promise<ReadUserDto> {
    if (Types.ObjectId.isValid(userId)) {
      const user = await this._userService.findOne(userId);
      if (user)
        return user;
      else
        throw new ObjectIdNotFoundException(userId, ValueMessage.USER);
    }
    throw new ObjectIdValidException(userId, ValueMessage.USER);
  }

  @Patch(':id')
  @ResponseMessage('Update User Succesfully')
  async update(@Param('id') userId: string, @Body() userDto: UpdateUserDto): Promise<any> {
    if (Types.ObjectId.isValid(userId)) {
      const user = await this._userService.findOne(userId);
      if (user) {
        return this._userService.update(userId, userDto);
      }
      else {
        throw new ObjectIdNotFoundException(userId, ValueMessage.USER);
      }
    }
    throw new ObjectIdValidException(userId, ValueMessage.USER);

  }

  @Delete(':id')
  @ResponseMessage('Delete User Succesfully')
  async remove(@Param('id') userId: string) {
    if (Types.ObjectId.isValid(userId)) {
      const user = await this._userService.findOne(userId);
      if (user) {
        return this._userService.remove(userId);
      }
      else {
        throw new ObjectIdNotFoundException(userId, ValueMessage.USER);
      }
    }
    throw new ObjectIdValidException(userId, ValueMessage.USER);
  }

}
