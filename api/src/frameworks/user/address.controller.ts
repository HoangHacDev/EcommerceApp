import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors } from '@nestjs/common';
import { UserService } from "./user.service";
import { ObjectIdNotFoundException, ObjectIdValidException, ResponseMessage, TransformationInterceptor } from 'src/middlewares';
import { Address } from './model/address.model';
import { AddressDto } from './dto/AddressDTO';
import { Types } from 'mongoose';
import { ValueMessage } from 'src/enum/value.enum';

@UseInterceptors(TransformationInterceptor)
@Controller('api/address')
export class AddressController {
    constructor(
        private readonly _userService: UserService,
    ) { }

    @Post(':id')
    @ResponseMessage('Address Create Succesfully')
    async createAdd(@Param('id') userID: string, @Body() addressDTO: AddressDto): Promise<Address> {
        if (Types.ObjectId.isValid(userID)) {
            let user = await this._userService.findOne(userID);
            let address = await this._userService.createAddress(addressDTO);
            if (user){
                await this._userService.addUserAddress(userID, address);
                return address;
            }
            else{
                throw new ObjectIdNotFoundException(userID, ValueMessage.USER);
            }
        }
        throw new ObjectIdValidException(userID, ValueMessage.USER);
    }

    @Get()
    @ResponseMessage('Addresses fetched Succesfully')
    findAllAdd(): Promise<Address[]> {
        let addresses = this._userService.findAllAddress();
        return addresses;
    }

    @Get(':id')
    @ResponseMessage('Address fetched Succesfully')
    async findOneAdd(@Param('id') addressId: string): Promise<Address> {
        if (Types.ObjectId.isValid(addressId)) {
            let address = await this._userService.findOneAddress(addressId);
            if (address)
                return address;
            else
                throw new ObjectIdNotFoundException(addressId, ValueMessage.ADDRESS);
        }
        throw new ObjectIdValidException(addressId, ValueMessage.ADDRESS);
    }

    @Patch(':id')
    @ResponseMessage('Update Address Succesfully')
    async updateAdd(@Param('id') addressId: string, @Body() addressDTO: AddressDto): Promise<any> {
        if (Types.ObjectId.isValid(addressId)) {
            let address = await this._userService.findOneAddress(addressId);
            if (address) {
                return this._userService.updateAddress(addressId, addressDTO);
            }
            else {
                throw new ObjectIdNotFoundException(addressId, ValueMessage.ADDRESS);
            }
        }
        throw new ObjectIdValidException(addressId, ValueMessage.ADDRESS);

    }

    @Delete(':id')
    @ResponseMessage('Delete Address Succesfully')
    async removeAdd(@Param('id') addressId: string) {
        if (Types.ObjectId.isValid(addressId)) {
            let address = await this._userService.findOneAddress(addressId);
            if (address) {
                return this._userService.removeAddress(addressId);
            }
            else {
                throw new ObjectIdNotFoundException(addressId, ValueMessage.ADDRESS);
            }
        }
        throw new ObjectIdValidException(addressId, ValueMessage.ADDRESS);
    }
}