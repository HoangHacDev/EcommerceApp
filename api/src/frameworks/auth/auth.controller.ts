import { Body, Controller, Param, Post, Request, UseInterceptors } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthEntity } from './entity/auth.entity';
import { LoginDto, RegisterDTO } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ResponseMessage, TransformationInterceptor } from 'src/middlewares';
import { User } from '../user/model/user.model';

@UseInterceptors(TransformationInterceptor)
@Controller('api/auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ResponseMessage('Login Succesfully')
  @ApiOkResponse({ type: AuthEntity })
  login(@Body() { email, password }: LoginDto) {
    return this.authService.login(email, password);
  }

  @Post('register')
  @ResponseMessage('Register Succesfully')
  register(@Body() userDTO : RegisterDTO) : Promise<any>{
    // console.log(userDTO);
    return this.authService.register(userDTO);
  }

  @Post('logout/:id')
  logout(@Param('id') userId : string, @Request() req){
    return this.authService.logout(userId, req.headers.authorization.split(' ')[1]);
  }

}
