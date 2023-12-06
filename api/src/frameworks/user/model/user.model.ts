import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema({timestamps: true})
export class User {
  @Prop({required : true})
  username: string;

  @Prop({required : true})
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
  address : string;
}

export const UserSchema = SchemaFactory.createForClass(User);
