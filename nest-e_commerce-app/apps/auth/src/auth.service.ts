import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './../../users/src/users.service';
import { JwtService } from '@nestjs/jwt';

// Correspond à l'enregistrement d'une nouvel utilisateur et à sa connexion

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    password: string,
  ): Promise<{
    access_token: string;
    user: any;
  }> {
    const user = await this.usersService.findOne(email);

    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: user,
    };
  }

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
