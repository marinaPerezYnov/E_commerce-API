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
  UseGuards,
} from '@nestjs/common';
import { PersonnalisationGraphiqueService } from './personnalisation-graphique.service';
import { PersonnalisationGraphic } from '../interfaces/personnalisation-graphique.interface';
import { CreatePersonnalisationGraphiqueDto } from '../dto/create-personnalisation-graphique.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('personnalisationGraphic')
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
  @UseGuards(JwtAuthGuard)
  createPersonnalisationGraphic(
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
  @UseGuards(JwtAuthGuard)
  getPersonnalisationGraphic(): Promise<PersonnalisationGraphic[]> {
    return this.personnalisationGraphiqueService.findAll();
  }

  /**
   * Récupérer une personnalisation graphique en se basant sur l'ownerId
   */
  @HttpCode(HttpStatus.OK)
  @Get('owner/:ownerId')
  @UseGuards(JwtAuthGuard)
  getPersonnalisationByOwnerId(
    @Param('ownerId') ownerId: string,
  ): Promise<PersonnalisationGraphic> {
    return this.personnalisationGraphiqueService.findByOwnerId(ownerId);
  }

  /**
   * Récupérer un personnalisation graphique par son id
   **/
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getProduit(@Param('id') id: string): Promise<PersonnalisationGraphic> {
    return this.personnalisationGraphiqueService.findOne(id);
  }

  /**
   * Mettre à jour la personnalisation graphique
   */
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @UseGuards(JwtAuthGuard)
  updateePersonnalisationGraphic(
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
  @UseGuards(JwtAuthGuard)
  deleteePersonnalisationGraphic(@Param('id') id: string): Promise<void> {
    return this.personnalisationGraphiqueService.remove(id);
  }
}
