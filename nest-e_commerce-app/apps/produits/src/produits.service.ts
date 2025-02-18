import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { Produit } from './produit.entity';

@Injectable()
export class ProduitsService {
  constructor(
    @InjectRepository(Produit)
    private produitsRepository: Repository<Produit>,
  ) {}
  async create(product: Partial<Produit>): Promise<Produit> {
    const newProduct = this.produitsRepository.create(product);
    return this.produitsRepository.save(newProduct);
  }

  async findAll(): Promise<Produit[]> {
    return this.produitsRepository.find();
  }

  async findOne(id: number): Promise<Produit> {
    const product = await this.produitsRepository.findOneBy({ id });
    if (!product) {
      throw new NotFoundException(`Produit avec l'ID ${id} non trouvé`);
    }
    return product;
  }
  async update(id: number, product: Partial<Produit>): Promise<Produit> {
    await this.produitsRepository.update(id, product);
    const updatedProduct = await this.produitsRepository.findOneBy({ id });
    if (!updatedProduct) {
      throw new NotFoundException(`Produit avec l'ID ${id} non trouvé`);
    }
    return updatedProduct;
  }

  async remove(id: number): Promise<void> {
    const result = await this.produitsRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Produit avec l'ID ${id} non trouvé`);
    }
  }
}

export enum Status {
  Available = 'Disponible',
  Reserved = 'Reservé',
  Waiting = 'En attente',
}
