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
import { ProduitsService } from './produits.service';
import { Produit } from '../interfaces/produit.interface';
import { CreateProduitDto } from '../dto/create-produit.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('produits')
@Controller('produits')
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) {}

  /**
   * Créer un nouveau produit
   */
  @HttpCode(HttpStatus.CREATED)
  @Post()
  @UseGuards(JwtAuthGuard)
  createProduit(@Body() produitDto: CreateProduitDto): Promise<Produit> {
    return this.produitsService.create(produitDto);
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
  @UseGuards(JwtAuthGuard)
  updateProduit(
    @Param('id') id: string,
    @Body() produitDto: CreateProduitDto,
  ): Promise<Produit> {
    return this.produitsService.update(id, produitDto);
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
