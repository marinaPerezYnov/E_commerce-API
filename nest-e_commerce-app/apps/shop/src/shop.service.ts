import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from 'apps/shop/src/shop.entity';

@Injectable()
export class ShopService {
  constructor(
    @InjectRepository(Shop)
    private shopRepository: Repository<Shop>,
  ) {}

  findAll(): Promise<Shop[]> {
    return this.shopRepository.find();
  }

  async findOne(id: number): Promise<Shop> {
    const shop = await this.shopRepository.findOneBy({ id });
    if (!shop) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
    return shop;
  }

  async create(shop: Partial<Shop>): Promise<Shop> {
    const newShop = this.shopRepository.create(shop);
    console.log('newShop : ', newShop);
    return this.shopRepository.save(newShop);
  }

  async update(id: number, shop: Partial<Shop>): Promise<Shop> {
    await this.shopRepository.update(id, shop);
    const updatedShop = await this.shopRepository.findOneBy({ id });
    if (!updatedShop) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
    return updatedShop;
  }

  async remove(id: number): Promise<void> {
    const result = await this.shopRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
  }
}
