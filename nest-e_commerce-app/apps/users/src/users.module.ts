import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// import { AuthController } from './../../auth/src/auth.controller';

@Module({
  imports: [],
  controllers: [UsersController],
  // controllers: [UsersController, AuthController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
