import { IsNotEmpty } from 'class-validator';
import { User } from '../model/user.model';

export class AddressDto {
    @IsNotEmpty()
    user_Id: User;

    is_default : Boolean;

    @IsNotEmpty()
    address_line1 : string;

    address_line2 : string;

    @IsNotEmpty()
    city : string;

    postal_code : string;

    @IsNotEmpty()
    country : string;

    phone: string;
}

