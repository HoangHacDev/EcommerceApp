import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserFactoryService } from './factory/userFactory.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './model/user.model';
import { Address, AddressSchema } from './model/address.model';
import { AddressController } from './address.controller';

@Module({
  imports:[
    MongooseModule.forFeature([
      {
        name: User.name, schema: UserSchema
      },
      {
        name: Address.name, schema: AddressSchema
      },
    ])
  ],
  controllers: [UserController, AddressController],
  providers: [UserService, UserFactoryService],
  exports: [UserService]
})
export class UserModule {}
