import {
  Controller,
  HttpStatus,
  HttpCode,
  Param,
  Body,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { PersonnalisationGraphiqueService } from './personnalisation-graphique.service';
import { PersonnalisationGraphic } from '../interfaces/personnalisation-graphique.interface';
import { CreatePersonnalisationGraphiqueDto } from '../dto/create-personnalisation-graphique.dto';

@Controller('personnalisationGraphic')
export class PersonnalisationGraphiqueController {
  constructor(
    private readonly personnalisationGraphiqueService: PersonnalisationGraphiqueService,
  ) {}

  /**
   * Créer une nouvelle personnalisation graphique
   */
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createProduit(
    @Body() personnalisationGraphiqueDto: CreatePersonnalisationGraphiqueDto,
  ): Promise<PersonnalisationGraphic> {
    return this.personnalisationGraphiqueService.create(
      personnalisationGraphiqueDto,
    );
  }

  /**
   * Récupérer tous les personnalisations graphique
   */
  @HttpCode(HttpStatus.OK)
  @Get()
  getProduits(): Promise<PersonnalisationGraphic[]> {
    return this.personnalisationGraphiqueService.findAll();
  }

  /**
   * Récupérer un personnalisation graphique par son id
   **/
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getProduit(@Param('id') id: string): Promise<PersonnalisationGraphic> {
    return this.personnalisationGraphiqueService.findOne(id);
  }

  /**
   * Mettre à jour la personnalisation graphique
   */
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  updateProduit(
    @Param('id') id: string,
    @Body() personnalisationGraphiqueDto: CreatePersonnalisationGraphiqueDto,
  ): Promise<PersonnalisationGraphic> {
    return this.personnalisationGraphiqueService.update(
      id,
      personnalisationGraphiqueDto,
    );
  }

  /**
   * Supprimer une personnalisation graphique
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  deleteProduit(@Param('id') id: string): Promise<void> {
    return this.personnalisationGraphiqueService.remove(id);
  }
}
