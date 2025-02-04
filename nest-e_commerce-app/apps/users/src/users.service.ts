import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello World!';
  }

  findOne(username: string): Promise<User | undefined> {}
}
