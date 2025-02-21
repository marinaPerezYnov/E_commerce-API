import { Model } from 'mongoose';
import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { Produit } from '../interfaces/produit.interface';
import { CreateProduitDto } from '../dto/create-produit.dto';

@Injectable()
export class ProduitsService {
  constructor(
    @Inject('PRODUIT_MODEL')
    private produitModel: Model<Produit>,
  ) {}

  async create(createProduitDto: CreateProduitDto): Promise<Produit> {
    const newProduit = new this.produitModel(createProduitDto);
    return newProduit.save();
  }

  async findAll(): Promise<Produit[]> {
    return this.produitModel.find().exec();
  }

  async findOne(id: string): Promise<Produit> {
    const produit = await this.produitModel.findById(id).exec();
    if (!produit) {
      throw new NotFoundException(`Produit with ID ${id} not found`);
    }
    return produit;
  }

  async update(
    id: string,
    updateProduitDto: CreateProduitDto,
  ): Promise<Produit> {
    const updatedProduit = await this.produitModel
      .findByIdAndUpdate(id, updateProduitDto, { new: true })
      .exec();
    if (!updatedProduit) {
      throw new NotFoundException(`Produit with ID ${id} not found`);
    }
    return updatedProduit;
  }

  async remove(id: string): Promise<void> {
    const result = await this.produitModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Produit with ID ${id} not found`);
    }
  }
}

export enum Status {
  Available = 'Disponible',
  Reserved = 'Reservé',
  Waiting = 'En attente',
}
