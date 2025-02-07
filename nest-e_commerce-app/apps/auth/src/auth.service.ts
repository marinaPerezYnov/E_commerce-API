import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './../../users/src/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  // async signIn(
  //   username: string,
  //   password: string,
  // ): Promise<{ access_token: string }> {
  //   const user = this.usersService.findOne(username);

  //   if (user?.password !== password) {
  //     throw new UnauthorizedException();
  //   }
  //   const payload = { sub: user.userId, username: user.username };
  //   return {
  //     access_token: await this.jwtService.signAsync(payload),
  //   };
  // }

  async signUp(
    email: string,
    password: string,
  ): Promise<{
    access_token: string;
    newUser: any;
  }> {
    const user = await this.usersService.findOne(email);
    if (user) {
      console.error('user', user);
      throw new UnauthorizedException();
    }
    const newUser = await this.usersService.create(email, password);
    console.error('newUser', newUser);
    const payload = { sub: newUser.id, username: newUser.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      newUser: newUser,
    };
  }
}
