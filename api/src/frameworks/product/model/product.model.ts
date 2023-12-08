import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true })
export class Product {
    @Prop()
    name: string;

    @Prop()
    title: string

    @Prop()
    desc: string;

    @Prop()
    size: string;

    @Prop()
    price: number;

    @Prop()
    quantity : number;

    // inside the class definition
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Category' })
    type_id: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
