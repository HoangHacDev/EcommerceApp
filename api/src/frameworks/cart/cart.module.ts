import { Module } from '@nestjs/common';
import { CartController } from './cart.controller';
import { CartService } from './cart.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './model/cart.model';
import { User, UserSchema } from '../user/model/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Cart', schema: CartSchema },
      { name: User.name, schema: UserSchema }
    ])
  ],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}