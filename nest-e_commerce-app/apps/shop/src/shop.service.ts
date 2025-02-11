import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShopEntity } from './shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(ShopEntity)
    private shopRepository: Repository<ShopEntity>,
  ) {}

  findAll(): Promise<ShopEntity[]> {
    return this.shopRepository.find();
  }

  async findOne(id: number): Promise<ShopEntity> {
    const shop = await this.shopRepository.findOneBy({ id });
    if (!shop) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
    return shop;
  }

  create(shop: Partial<ShopEntity>): Promise<ShopEntity> {
    const newShop = this.shopRepository.create(shop);
    return this.shopRepository.save(newShop);
  }

  async update(id: number, shop: Partial<ShopEntity>): Promise<ShopEntity> {
    await this.shopRepository.update(id, shop);
    const updatedShop = await this.shopRepository.findOneBy({ id });
    if (!updatedShop) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
    return updatedShop;
  }

  async remove(id: number): Promise<void> {
    await this.shopRepository.delete(id);
  }
}
