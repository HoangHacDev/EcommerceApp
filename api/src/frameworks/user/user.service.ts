import { Injectable } from '@nestjs/common';
import { GenericRepository, IGenericRepository } from 'src/interfaces';
import { User, UserDocument } from './model/user.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UserFactoryService } from './factory/userFactory.service';
import { CreateUserDto, ReadUserDto, UpdateUserDto } from './dto/UserDTO';
import * as bcrypt from 'bcrypt';
import { Address, AddressDocument } from './model/address.model';
import { EmailExistException, UsernameExistException } from 'src/middlewares';

@Injectable()
export class UserService {
  // * Dependency Injection
  private readonly _userRepository: IGenericRepository<User>;
  private readonly _addressRepository: IGenericRepository<Address>;

  // * Jnject to contructor
  constructor(
    // * Call Model with decorator @InjectModel
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    @InjectModel(Address.name) private readonly addressModel: Model<AddressDocument>,
    // * Inject userFactory
    private _userFactoryService: UserFactoryService) {
    // * initial User base Repository
    this._userRepository = new GenericRepository<User>(userModel);
    this._addressRepository = new GenericRepository<Address>(addressModel);
  }

  async create(userDTO: CreateUserDto): Promise<ReadUserDto> {
    let userWithEmail = await this.userModel.findOne({ email: userDTO.email });
    let userWithUsername = await this.userModel.findOne({ username: userDTO.username });
    if (!userWithEmail) {
      if (!userWithUsername) {
        let user = this._userFactoryService.addUser(userDTO);
        user.password = await bcrypt.hash(user.password, 10);
        return this._userRepository.add(user);
      }
      throw new UsernameExistException(userDTO.username);
    }
    throw new EmailExistException(userDTO.email);

  }

  findAll(): Promise<ReadUserDto[]> {
    return this._userRepository.getAll();
  }

  findOne(userId: string): Promise<ReadUserDto> {
    return this._userRepository.get(userId);
  }

  update(userId: string, userDTO: UpdateUserDto): Promise<any> {
    let user = this._userFactoryService.updateUser(userDTO);
    return this._userRepository.update(userId, user);
  }

  remove(userId: string): Promise<any> {
    return this._userRepository.delete(userId);
  }

  //Address service

  findAllAddress(): Promise<Address[]> {
    return this._addressRepository.getAll();
  }

  findOneAddress(addressId: string): Promise<Address> {
    return this._addressRepository.get(addressId);
  }

  createAddress(address: Address): Promise<any> {
    return this._addressRepository.add(address);
  }

  updateAddress(addressId: string, address: Address): Promise<any> {
    return this._addressRepository.update(addressId, address);
  }

  removeAddress(addressId: string): Promise<any> {
    return this._addressRepository.delete(addressId);
  }

  addUserAddress(userId: string, add: Address): Promise<any> {
    let address = this.userModel.findByIdAndUpdate(userId, {
      $push: {
        addresses: add
      }
    });
    return address;
  }

}
