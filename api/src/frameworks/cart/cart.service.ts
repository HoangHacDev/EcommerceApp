import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cart, CartDocument } from "./model/cart.model";
import { ItemDTO } from "./dto/item.dto";
import { User, UserDocument } from "../user/model/user.model";

@Injectable()
export class CartService {
    constructor(
        @InjectModel(Cart.name) private readonly cartModel: Model<CartDocument>,
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
        ) { }

    async getAll() : Promise<any>{
        return await this.cartModel.find();
    }

    async createCart(userId: string, itemDTO: ItemDTO, subTotalPrice: number, totalPrice: number): Promise<Cart> {

        let newCart = await this.cartModel.create({
            userId,
            items: [{ ...itemDTO, subTotalPrice }],
            totalPrice
        });

        return newCart;
    }

    async checkUserExist(userId : string) : Promise<any>{
        let user = await this.userModel.findById(userId);
        return user
    }

    async getCart(userId: string): Promise<CartDocument> {
        let cart = await this.cartModel.findOne({ userId });
        return cart;
    }

    async deleteCart(userId: string): Promise<any> {
        return await this.cartModel.findOneAndDelete({ userId });
    }

    //Tính lại giỏ hàng
    private recalculateCart(cart: CartDocument) {
        //set tổng giá trị == 0
        cart.totalPrice = 0;
        // dùng forEach lọc từng sản phẩm
        // rồi lấy số lượng * giá tiền => tổng tiền cho một sản phẩm
        // tiếp tục một sản phẩm cộng dồn với tổng tiền 
        cart.items.forEach(item => {
            cart.totalPrice += (item.quantity * item.price);
        })
    }

    async addItemToCart(userId: string, itemDTO: ItemDTO): Promise<Cart> {
        // khởi tạo object itemDTO
        const { productId, quantity, price } = itemDTO;
        //Tính tổng tiền chưa trừ phí
        const subTotalPrice = quantity * price;
        //Lấy ra giỏ hàng theo id người dùng
        const cart = await this.getCart(userId);

        //cart === true
        if (cart) {

            //lấy ra index mặt hàng
            const itemIndex = cart.items.findIndex((item) =>
                item.productId == productId
            );

            //Nếu như vị trí -1 : chưa có thêm vào giỏ 
            if (itemIndex > -1) {
                //Lý do dùng let: nó có scope(phạm vi) trong khối mã if 
                //Lấy ra sản phẩm
                let item = cart.items[itemIndex];
                item.quantity = Number(item.quantity) + Number(quantity); //quantity : request
                item.subTotalPrice = item.quantity * item.price;

                cart.items[itemIndex] = item;
                this.recalculateCart(cart);
                return cart.save();
            } else {
                //trong trường đã tồn tại sản phẩm rồi
                cart.items.push({ ...itemDTO, subTotalPrice });
                this.recalculateCart(cart);
                return cart.save();
            }
        } else {
            const newCart = await this.createCart(userId, itemDTO, subTotalPrice, price);
            return newCart;
        }
    }

    async removeItemFromCart(userId: string, productId: string): Promise<any> {
        const cart = await this.getCart(userId);

        const itemIndex = cart.items.findIndex((item) => item.productId == productId);

        if (itemIndex > -1) {
            // Loại bỏ 1 phần tử từ chỉ số itemIndex
            cart.items.splice(itemIndex, 1);
            return cart.save();
        }
    }

}