import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './../../users/src/users.service';
import { JwtService } from '@nestjs/jwt';
import { emailValidator, passwordValidator } from '../../utils/validators';
import { passwordErrorText, emailErrorText } from 'apps/utils/text';

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
    error: string;
  }> {
    const user = await this.usersService.findOne(email);

    if (!user || user.password !== password) {
      throw new UnauthorizedException();
    }

    if (!emailValidator(email, emailErrorText)) {
      return {
        access_token: '',
        user,
        error: emailErrorText,
      };
    }

    if (!passwordValidator(password, passwordErrorText)) {
      return {
        access_token: '',
        user,
        error: passwordErrorText,
      };
    }

    const payload = { sub: user.id, username: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      user: user,
      error: '',
    };
  }

  async signUp(
    email: string,
    password: string,
  ): Promise<{
    access_token: string;
    newUser: any;
    error: string;
  }> {
    const user = await this.usersService.findOne(email);
    if (user) {
      console.error('user', user);
      throw new UnauthorizedException();
    }

    if (!emailValidator(email, emailErrorText)) {
      return {
        access_token: '',
        newUser: null,
        error: emailErrorText,
      };
    }

    if (!passwordValidator(password, passwordErrorText)) {
      return {
        access_token: '',
        newUser: null,
        error: passwordErrorText,
      };
    }

    const newUser = await this.usersService.create(email, password);
    if (typeof newUser === 'string') {
      return {
        access_token: '',
        newUser: null,
        error: newUser,
      };
    }

    const payload = { sub: newUser.id, username: newUser.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
      newUser: newUser,
      error: ``,
    };
  }
}
