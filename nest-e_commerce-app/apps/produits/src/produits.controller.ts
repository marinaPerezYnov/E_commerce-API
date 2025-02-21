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
import { ProduitsService } from './produits.service';
import { Produit } from '../interfaces/produit.interface';
import { CreateProduitDto } from '../dto/create-produit.dto';

@Controller('produits')
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) {}

  /**
   * Créer un nouveau produit
   */
  @HttpCode(HttpStatus.CREATED)
  @Post()
  createProduit(@Body() produitDto: CreateProduitDto): Promise<Produit> {
    return this.produitsService.create(produitDto);
  }

  /**
   * Récupérer tous les produits
   */
  @HttpCode(HttpStatus.OK)
  @Get()
  getProduits(): Promise<Produit[]> {
    return this.produitsService.findAll();
  }

  /**
   * Récupérer un produit par son id
   **/
  @HttpCode(HttpStatus.OK)
  @Get(':id')
  getProduit(@Param('id') id: string): Promise<Produit> {
    return this.produitsService.findOne(id);
  }

  /**
   * Mettre à jour le produit
   */
  @HttpCode(HttpStatus.OK)
  @Put(':id')
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
  deleteProduit(@Param('id') id: string): Promise<void> {
    return this.produitsService.remove(id);
  }
}
