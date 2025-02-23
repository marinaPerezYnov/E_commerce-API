import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { Shop } from './shop.entity';
import { AuthModule } from 'apps/auth/src/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Shop]), AuthModule],
  providers: [ShopService],
  controllers: [ShopController],
})
export class ShopModule {}
