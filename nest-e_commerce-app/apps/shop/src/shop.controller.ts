import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { ShopService } from './shop.service';
import { Shop } from './shop.entity';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('shop')
@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  @UseGuards(JwtAuthGuard)
  findAll(): Promise<Shop[]> {
    return this.shopService.findAll();
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number): Promise<Shop> {
    return this.shopService.findOne(id);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body()
    {
      name,
      ownerId,
      themeConfig,
      createdAt,
      updatedAt,
    }: {
      name: string;
      ownerId: number;
      themeConfig: string;
      createdAt: Date;
      updatedAt: Date;
    },
  ): Promise<Shop> {
    const shop: Partial<Shop> = {
      name,
      ownerId,
      themeConfig,
      createdAt,
      updatedAt,
    };
    return this.shopService.create(shop);
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: number, @Body() shop: Partial<Shop>): Promise<Shop> {
    return this.shopService.update(id, shop);
  }

  @HttpCode(HttpStatus.OK)
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: number): Promise<void> {
    return this.shopService.remove(id);
  }
}
