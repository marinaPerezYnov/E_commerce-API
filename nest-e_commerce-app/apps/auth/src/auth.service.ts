import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './../../users/src/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = this.usersService.findOne(username);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.userId, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = this.usersService.findOne(username);

    if (user) {
      throw new UnauthorizedException();
    }

    const newUser = {
      userId: Date.now(),
      username,
      password,
    };

    const payload = { sub: newUser.userId, username: newUser.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
