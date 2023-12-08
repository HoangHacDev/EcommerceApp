import { Injectable } from '@nestjs/common';
import { GenericRepository, IGenericRepository } from 'src/interfaces';
import { User, UserDocument } from './model/user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserFactoryService } from './factory/userFactory.service';
import { CreateUserDto, ReadUserDto, UpdateUserDto } from './dto/UserDTO';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  // * Dependency Injection
  private readonly _userRepository: IGenericRepository<User>;
  
  // * Jnject to contructor
  constructor(
    // * Call Model with decorator @InjectModel
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    // * Inject userFactory
    private _userFactoryService : UserFactoryService){
    // * initial User base Repository
    this._userRepository = new GenericRepository<User>(userModel);
  }

  async create(userDTO : CreateUserDto) : Promise<ReadUserDto>{
    const user = this._userFactoryService.addUser(userDTO);
    user.password = await bcrypt.hash(user.password, 10);
    return this._userRepository.add(user);
  }

  findAll() : Promise<ReadUserDto[]>{
    return this._userRepository.getAll();
  }

  findOne(userId: string) : Promise<ReadUserDto>{
    return this._userRepository.get(userId);
  }

  update(userId: string, userDTO : UpdateUserDto) : Promise<any>{
    const user = this._userFactoryService.updateUser(userDTO);
    return this._userRepository.update(userId, user);
  }

  remove(userId: string) : Promise<any>{
    return this._userRepository.delete(userId);
  }
}
