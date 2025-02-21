import { Model } from 'mongoose';
import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { PersonnalisationGraphic } from '../interfaces/personnalisation-graphique.interface';
import { CreatePersonnalisationGraphiqueDto } from '../dto/create-personnalisation-graphique.dto';

@Injectable()
export class PersonnalisationGraphiqueService {
  constructor(
    @Inject('PERSONNALISATIONGRAPHIQUE_MODEL')
    private personnalisationGraphicModel: Model<PersonnalisationGraphic>,
  ) {}

  async create(
    createPersonnalisationGraphiqueDto: CreatePersonnalisationGraphiqueDto,
  ): Promise<PersonnalisationGraphic> {
    const newPersonnalisationGraphicModel =
      new this.personnalisationGraphicModel(createPersonnalisationGraphiqueDto);
    return newPersonnalisationGraphicModel.save();
  }

  async findAll(): Promise<PersonnalisationGraphic[]> {
    return this.personnalisationGraphicModel.find().exec();
  }

  async findOne(id: string): Promise<PersonnalisationGraphic> {
    const personnalisationGraphic = await this.personnalisationGraphicModel
      .findById(id)
      .exec();
    if (!personnalisationGraphic) {
      throw new NotFoundException(
        `Personnalisation Graphique with ID ${id} not found`,
      );
    }
    return personnalisationGraphic;
  }

  async update(
    id: string,
    updatePersonnalisationGraphiqueDto: CreatePersonnalisationGraphiqueDto,
  ): Promise<PersonnalisationGraphic> {
    const updatedPersonnalisationGraphicModel =
      await this.personnalisationGraphicModel
        .findByIdAndUpdate(id, updatePersonnalisationGraphiqueDto, {
          new: true,
        })
        .exec();
    if (!updatedPersonnalisationGraphicModel) {
      throw new NotFoundException(
        `Personnalisation Graphique with ID ${id} not found`,
      );
    }
    return updatedPersonnalisationGraphicModel;
  }

  async remove(id: string): Promise<void> {
    const result = await this.personnalisationGraphicModel
      .findByIdAndDelete(id)
      .exec();
    if (!result) {
      throw new NotFoundException(
        `Personnalisation Graphique with ID ${id} not found`,
      );
    }
  }
}
