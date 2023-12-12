import { Body, Controller, Delete, Get, NotFoundException, Param, Post, UseInterceptors } from "@nestjs/common";
import { ItemDTO } from "./dto/item.dto";
import { CartService } from "./cart.service";
import { ObjectIdNotFoundException, ObjectIdValidException, ResponseMessage, TransformationInterceptor } from "src/middlewares";
import { Types } from "mongoose";
import { ValueMessage } from "src/enum/value.enum";

@UseInterceptors(TransformationInterceptor)
@Controller('api/cart')
export class CartController {
    constructor(private cartService: CartService) { }

    @Get()
    @ResponseMessage('Carts fetched Succesfully')
    findAll() {
        return this.cartService.getAll();
    }

    @Get(':id')
    async getOneWithUser(@Param('id') userId: string) {
        if (Types.ObjectId.isValid(userId)) {
            let user = await this.cartService.checkUserExist(userId);
            if (user) {
                return this.cartService.getCart(userId);
            }
            throw new ObjectIdNotFoundException(userId, ValueMessage.USER);
        }
        throw new ObjectIdValidException(userId, ValueMessage.USER);
    }

    @Post(':id')
    @ResponseMessage('Add Item to Cart Succesfully')
    async addItemToCart(@Param('id') userId: string, @Body() itemDTO: ItemDTO) {
        if (Types.ObjectId.isValid(userId)) {
            let user = await this.cartService.checkUserExist(userId);
            if (user) {
                if (itemDTO !== null) {
                    const cart = await this.cartService.addItemToCart(userId, itemDTO);
                    return cart;
                }
                throw new ObjectIdNotFoundException(itemDTO.productId, ValueMessage.PRODUCT);
            }
            throw new ObjectIdNotFoundException(userId, ValueMessage.USER);
        }
        throw new ObjectIdValidException(userId, ValueMessage.USER);
    }

    @Delete('item/:id')
    @ResponseMessage('Remove Item from Cart Succesfully')
    async removeItemFromCart(@Param('id') userId: string, @Body() { productId }) {
        if (Types.ObjectId.isValid(userId)) {
            let user = await this.cartService.checkUserExist(userId);
            if (user) {
                const cart = await this.cartService.removeItemFromCart(userId, productId);
                if (!cart) throw new NotFoundException('Item does not exist');
                return cart;
            }
            throw new ObjectIdNotFoundException(userId, ValueMessage.USER);
        }
        throw new ObjectIdValidException(userId, ValueMessage.USER);

    }

    @Delete(':id')
    @ResponseMessage('Delete Cart Succesfully')
    async deleteCart(@Param('id') userId: string) {
        if (Types.ObjectId.isValid(userId)) {
            let user = await this.cartService.checkUserExist(userId);
            if (user) {
                const cart = await this.cartService.deleteCart(userId);
                if (!cart) throw new ObjectIdNotFoundException(userId, ValueMessage.CART);
                return cart;
            }
            throw new ObjectIdNotFoundException(userId, ValueMessage.USER);
        }
        throw new ObjectIdValidException(userId, ValueMessage.USER);

    }
}