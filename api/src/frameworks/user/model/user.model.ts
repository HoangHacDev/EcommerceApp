import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from 'src/frameworks';

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
  address : string;

  @Prop()
  roles: Role[];
}

export const UserSchema = SchemaFactory.createForClass(User);
