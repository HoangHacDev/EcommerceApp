import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';
import { Item } from './item.model';

export type CartDocument = Cart & Document;

@Schema({ timestamps: true })
export class Cart {
    @Prop({ type: SchemaTypes.ObjectId, ref: 'User' })
    userId: string;

    @Prop()
    items: Item[];

    @Prop()
    totalPrice: number;
}

export const CartSchema = SchemaFactory.createForClass(Cart);