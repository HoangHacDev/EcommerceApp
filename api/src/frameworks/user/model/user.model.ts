import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Role } from 'src/frameworks';
import { Address } from './address.model';
import { Type } from 'class-transformer';

export type UserDocument = User & Document;

@Schema({timestamps: true})
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  firstname : string;

  @Prop()
  lastname : string;

  // * Future authen with phone or email
  @Prop()
  email : string;

  @Prop()
  phone : string;

  @Prop()
  accessToken : string;

  @Prop()
  roles: Role[];

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Address' }] })
  @Type(() => Address)
  addresses : Address[];
}

export const UserSchema = SchemaFactory.createForClass(User);
