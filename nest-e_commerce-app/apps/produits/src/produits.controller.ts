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
import { ProduitsService } from './produits.service';
import { UsersService } from './../../users/src/users.service';
import { Produit } from '../interfaces/produit.interface';
import { CreateProduitDto } from '../dto/create-produit.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';
import { RolesGuard } from './../../roles.guard';
import { Roles } from './../../roles.decorator';

@ApiBearerAuth()
@ApiTags('produits')
@Controller('produits')
export class ProduitsController {
  constructor(
    private readonly produitsService: ProduitsService,
    private readonly usersService: UsersService,
  ) {}

  /**
   * Créer un nouveau produit
   */
  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async createProduit(@Body() produitDto: CreateProduitDto): Promise<Produit> {
    const ownerId = produitDto.ownerId;
    try {
      const user = await this.usersService.findOneById(ownerId);
      if (user?.role !== 'admin') {
        throw new UnauthorizedException(
          "Vous n'êtes pas autorisé à effectuer cette action",
        );
      }
      return this.produitsService.create(produitDto);
    } catch (error) {
      throw new UnauthorizedException(
        "Vous n'êtes pas autorisé à effectuer cette action",
      );
    }
  }

  /**
   * Récupérer tous les produits
   */
  @HttpCode(HttpStatus.OK)
  @Get()
  @UseGuards(JwtAuthGuard)
  getProduits(): Promise<Produit[]> {
    return this.produitsService.findAll();
  }

  /**
   * Récupérer un produit par son id
   **/
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  @UseGuards(JwtAuthGuard)
  getProduit(@Param('id') id: string): Promise<Produit> {
    return this.produitsService.findOne(id);
  }

  /**
   * Mettre à jour le produit
   */
  @HttpCode(HttpStatus.OK)
  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async updateProduit(
    @Param('id') id: string,
    @Body() produitDto: CreateProduitDto,
  ): Promise<Produit> {
    const ownerId = produitDto.ownerId;
    try {
      const user = await this.usersService.findOneById(ownerId);
      if (user?.role !== 'admin') {
        throw new UnauthorizedException(
          "Vous n'êtes pas autorisé à effectuer cette action",
        );
      }
      return this.produitsService.update(id, produitDto);
    } catch (error) {
      throw new UnauthorizedException(
        "Vous n'êtes pas autorisé à effectuer cette action",
      );
    }
  }

  /**
   * Supprimer un produit
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  deleteProduit(@Param('id') id: string): Promise<void> {
    return this.produitsService.remove(id);
  }
}
