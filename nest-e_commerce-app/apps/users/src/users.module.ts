import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersController } from './users/users.controller';
import { AuthController } from './users/auth/auth.controller';

@Module({
  imports: [],
  controllers: [UsersController, AuthController],
  providers: [UsersService],
})
export class UsersModule {}
