import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './../../auth/src/auth.module';
import { UsersModule } from 'apps/users/src/users.module';
// import { AuthService } from 'apps/auth/src/auth.service';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
