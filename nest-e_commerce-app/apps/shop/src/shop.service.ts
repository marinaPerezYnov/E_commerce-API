import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Shop } from 'apps/shop/src/shop.entity';

import { stringValidator, numberValidator } from 'apps/utils/validators';
import { stringErrorText, numberErrorText } from 'apps/utils/text';

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
    if (!numberValidator(id, numberErrorText)) {
      throw new NotFoundException(numberErrorText);
    }
    const shop = await this.shopRepository.findOneBy({ id });
    if (!shop) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
    return shop;
  }

  async create(shop: Partial<Shop>): Promise<Shop> {
    const newShop = this.shopRepository.create(shop);
    if (
      !stringValidator(newShop.name, stringErrorText) ||
      !stringValidator(newShop.themeConfig, stringErrorText)
    ) {
      throw new NotFoundException(stringErrorText);
    }
    if (!numberValidator(newShop.ownerId, numberErrorText)) {
      throw new NotFoundException(numberErrorText);
    }

    console.log('newShop : ', newShop);
    return this.shopRepository.save(newShop);
  }

  async update(id: number, shop: Partial<Shop>): Promise<Shop> {
    if (!numberValidator(id, numberErrorText)) {
      throw new NotFoundException(numberErrorText);
    }
    await this.shopRepository.update(id, shop);
    const updatedShop = await this.shopRepository.findOneBy({ id });
    if (!updatedShop) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
    return updatedShop;
  }

  async remove(id: number): Promise<void> {
    if (!numberValidator(id, numberErrorText)) {
      throw new NotFoundException(numberErrorText);
    }
    const result = await this.shopRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Shop with ID ${id} not found`);
    }
  }
}
