import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    //TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot({
      expandVariables: true,
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  // exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
