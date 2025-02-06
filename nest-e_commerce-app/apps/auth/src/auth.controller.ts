import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @HttpCode(HttpStatus.OK)
  // @Post('login')
  // signIn(@Body() signInDto: Record<string, any>) {
  //   return this.authService.signIn(signInDto.username, signInDto.password);
  // }

  // @HttpCode(HttpStatus.CREATED)
  // @Post('register')
  // signUp(@Body() signUpDto: Record<string, any>) {
  //   return this.authService.signUp(signUpDto.username, signUpDto.password);
  // }

  // @UseGuards(AuthGuard)
  // @Get('profile')
  // getProfile(@Request() req) {
  //   return req.user;
  // }
}
//Endpoints à tester sur postman : https://docs.nestjs.com/security/authentication#implementing-the-sign-in-endpoint
