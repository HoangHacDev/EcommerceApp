import { Role } from "src/frameworks/auth/enum/role.enum";
import { Address } from "../model/address.model";

export class UserEntity {
    username : string;

    password : string;

    firstname : string;
  
    lastname : string;
  
    email : string;
  
    phone : string;
  
    addresses : Address[];

    accessToken : string;

    roles: Role[];
}
