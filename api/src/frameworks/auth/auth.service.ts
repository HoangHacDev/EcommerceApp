import {
    BadRequestException,
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../user/model/user.model';
import { Model } from 'mongoose';
import { RegisterDTO } from './dto/login.dto';
import { UserFactoryService } from '../user/factory/userFactory.service';
import { EmailExistException, UsernameExistException } from 'src/middlewares';

@Injectable()
export class AuthService {
    constructor(
        // * Call Model with decorator @InjectModel
        @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
        private _userFactoryService : UserFactoryService,
        private jwtService: JwtService) { }


    async register(userDTO : RegisterDTO){
        const userWithEmail = await this.userModel.findOne({ email: userDTO.email });
        const userWithUsername = await this.userModel.findOne({ username: userDTO.username });
        if(!userWithEmail){
            if(!userWithUsername){
                const user = this._userFactoryService.addUser(userDTO);
                user.password = await bcrypt.hash(user.password, 10);
                return this.userModel.create(user);
                }
            throw new UsernameExistException(userDTO.username);    
            }
        throw new EmailExistException(userDTO.email);
    }    

    async login(email: string, password: string): Promise<AuthEntity> {
        // Step 1: Fetch a user with the given email
        const user = await this.userModel.findOne({ email: email });

        // If no user is found, throw an error
        if (!user) {
            throw new NotFoundException(`No user found for email: ${email}`);
        }

        // Step 2: Check if the password is correct
        const isPasswordValid = await bcrypt.compare(password, user.password);

        // If password does not match, throw an error
        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        //save to database user
        user.accessToken = this.jwtService.sign({ userId: user._id });
        await user.save();

        // Step 3: Generate a JWT containing the user's ID and return it
        return {
            accessToken: this.jwtService.sign({ userId: user._id }),
        };
    }

    async isTokenValid(token: string): Promise<boolean> {
        const existingToken = await this.userModel.findOne({ accessToken: token });
        return !!existingToken;
    }

    async logout(userId: string, token: string): Promise<any> {
        const isTokenValid = await this.isTokenValid(token);

        if (!isTokenValid) {
            throw new UnauthorizedException('Invalid token');
        }

        const user = await this.userModel.findByIdAndUpdate(userId, {
            $unset: {
                accessToken: ""
            }
        })

        await user.save();

        return { message: 'Lougout Succesfully !' }
    }
}
