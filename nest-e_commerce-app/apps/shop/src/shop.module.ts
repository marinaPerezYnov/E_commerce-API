import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { Shop } from './shop.entity';
// import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Shop])],
  providers: [ShopService],
  controllers: [ShopController],
  // exports: [ShopService, TypeOrmModule],
})
export class ShopModule {}
