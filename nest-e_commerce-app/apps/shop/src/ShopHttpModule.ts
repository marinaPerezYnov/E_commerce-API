import { Module } from '@nestjs/common';
import { ShopModule } from './shop.module';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';

// https://docs.nestjs.com/techniques/database

@Module({
  imports: [ShopModule],
  providers: [ShopService],
  controllers: [ShopController],
})
export class ShopHttpModule {}
