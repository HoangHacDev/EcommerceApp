import { Role } from "src/frameworks/auth/enum/role.enum";

export class UserEntity {
    username : string;

    password : string;

    firstname : string;
  
    lastname : string;
  
    email : string;
  
    phone : string;
  
    address : string;

    roles: Role[];
}
