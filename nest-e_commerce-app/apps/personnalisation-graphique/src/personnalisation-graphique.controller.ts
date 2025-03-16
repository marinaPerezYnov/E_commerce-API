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
  UnauthorizedException,
} from '@nestjs/common';
import { PersonnalisationGraphiqueService } from './personnalisation-graphique.service';
import { UsersService } from './../../users/src/users.service';
import { PersonnalisationGraphic } from '../interfaces/personnalisation-graphique.interface';
import { CreatePersonnalisationGraphiqueDto } from '../dto/create-personnalisation-graphique.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';
import { RolesGuard } from './../../roles.guard';
import { Roles } from './../../roles.decorator';

@ApiBearerAuth()
@ApiTags('personnalisationGraphic')
@Controller('personnalisationGraphic')
export class PersonnalisationGraphiqueController {
  constructor(
    private readonly personnalisationGraphiqueService: PersonnalisationGraphiqueService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * Créer une nouvelle personnalisation graphique
   */
  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async createPersonnalisationGraphic(
    @Body() personnalisationGraphiqueDto: CreatePersonnalisationGraphiqueDto,
  ): Promise<PersonnalisationGraphic> {
    const ownerId = personnalisationGraphiqueDto.ownerId;
    try {
      const user = await this.usersService.findOneById(ownerId);
      if (user?.role !== 'admin') {
        throw new UnauthorizedException(
          "Vous n'êtes pas autorisé à effectuer cette action",
        );
      }
      return this.personnalisationGraphiqueService.create(
        personnalisationGraphiqueDto,
      );
    } catch (error) {
      throw new UnauthorizedException(
        "Vous n'êtes pas autorisé à effectuer cette action",
      );
    }
  }

  /**
   * Récupérer tous les personnalisations graphique
   */
  @HttpCode(HttpStatus.OK)
  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  getPersonnalisationGraphic(): Promise<PersonnalisationGraphic[]> {
    return this.personnalisationGraphiqueService.findAll();
  }

  /**
   * Récupérer une personnalisation graphique en se basant sur l'ownerId
   */
  @HttpCode(HttpStatus.OK)
  @Get('owner/:ownerId')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async getPersonnalisationByOwnerId(
    @Param('ownerId') ownerId: string,
  ): Promise<PersonnalisationGraphic> {
    try {
      const user = await this.usersService.findOneById(ownerId);
      if (user?.role !== 'admin') {
        throw new UnauthorizedException(
          "Vous n'êtes pas autorisé à effectuer cette action",
        );
      }
      return this.personnalisationGraphiqueService.findByOwnerId(ownerId);
    } catch (error) {
      throw new UnauthorizedException(
        "Vous n'êtes pas autorisé à effectuer cette action",
      );
    }
  }

  /**
   * Récupérer un personnalisation graphique par son id
   **/
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  getProduit(@Param('id') id: string): Promise<PersonnalisationGraphic> {
    return this.personnalisationGraphiqueService.findOne(id);
  }

  /**
   * Mettre à jour la personnalisation graphique
   */
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async updateePersonnalisationGraphic(
    @Param('id') id: string,
    @Body() personnalisationGraphiqueDto: CreatePersonnalisationGraphiqueDto,
  ): Promise<PersonnalisationGraphic> {
    const ownerId = personnalisationGraphiqueDto.ownerId;
    try {
      const user = await this.usersService.findOneById(ownerId);
      if (user?.role !== 'admin') {
        throw new UnauthorizedException(
          "Vous n'êtes pas autorisé à effectuer cette action",
        );
      }
      return this.personnalisationGraphiqueService.update(
        id,
        personnalisationGraphiqueDto,
      );
    } catch (error) {
      throw new UnauthorizedException(
        "Vous n'êtes pas autorisé à effectuer cette action",
      );
    }
  }

  /**
   * Supprimer une personnalisation graphique
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  deleteePersonnalisationGraphic(@Param('id') id: string): Promise<void> {
    return this.personnalisationGraphiqueService.remove(id);
  }
}
