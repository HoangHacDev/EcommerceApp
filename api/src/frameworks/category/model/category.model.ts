import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Product } from 'src/frameworks/product/model/product.model';

export type CategoryDocument = Category & Document;

@Schema({ timestamps: true })
export class Category {
    @Prop()
    name: string;

    @Prop()
    desc: string;

    @Prop()
    quantity: string;

    // inside the class definition
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }] })
    products: Product[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
