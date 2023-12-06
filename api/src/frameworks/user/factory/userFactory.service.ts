
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { CreateUserDto, ReadUserDto, UpdateUserDto } from '../dto/UserDTO';

@Injectable()
export class UserFactoryService {

  addUser(userDTO: CreateUserDto) {
    const user = new UserEntity();
    user.username = userDTO.username;
    user.password = userDTO.password;
    user.firstname = "";
    user.lastname = "";
    user.email = "";
    user.phone = "";
    user.address = "";

    return user;
  }

  updateUser(userDTO: UpdateUserDto) {
    const user = new UserEntity();
    user.firstname = userDTO.firstname;
    user.lastname = userDTO.lastname;
    user.email = userDTO.email;
    user.phone = userDTO.phone;
    user.address = userDTO.address;

    return user;
  }
}
