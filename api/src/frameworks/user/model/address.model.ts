import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Role, User } from 'src/frameworks';

export type AddressDocument = Address & Document;

@Schema({ timestamps: true })
export class Address {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    @Type(() => User)
    user_Id: User;

    @Prop()
    is_default : Boolean;

    @Prop()
    address_line1 : string;

    @Prop()
    address_line2 : string;

    @Prop()
    city : string;

    @Prop()
    postal_code : string;

    @Prop()
    country : string;

    @Prop()
    phone: string;

}

export const AddressSchema = SchemaFactory.createForClass(Address);
