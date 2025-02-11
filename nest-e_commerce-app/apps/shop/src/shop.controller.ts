import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopEntity } from './shop.entity';

@Controller('shops')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}
  @Get()
  findAll(): Promise<ShopEntity[]> {
    return this.shopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<ShopEntity> {
    return this.shopService.findOne(id);
  }

  @Post()
  create(@Body() shop: Partial<ShopEntity>): Promise<ShopEntity> {
    return this.shopService.create(shop);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() shop: Partial<ShopEntity>,
  ): Promise<ShopEntity> {
    return this.shopService.update(id, shop);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.shopService.remove(id);
  }
}
