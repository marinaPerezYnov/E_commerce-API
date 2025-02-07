import { Controller, HttpStatus } from '@nestjs/common';
import { ProduitsService } from './produits.service';
import { Body, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';

@Controller()
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) {}

  /**
   * Créer un nouveau produit
   */
  @HttpCode(HttpStatus.CREATED)
  @Post('produits')
  createProduit(@Body() produitDto: Record<string, any>) {
    return this.produitsService.create(produitDto);
  }

  /**
   * Récupérer tous les produits
   */
  @HttpCode(HttpStatus.OK)
  @Get('produits')
  getProduits() {
    return this.produitsService.findAll();
  }

  /**
   * Récupérer un produit par son id
   **/
  @HttpCode(HttpStatus.OK)
  @Get('produits/:id')
  getProduit(@Param('id') id: string) {
    return this.produitsService.findOne(id);
  }
  /**
   * Mettre à jour le produit
   */
  @HttpCode(HttpStatus.OK)
  @Put('produits/:id')
  updateProduit(@Param('id') id: string, @Body() produitDto: Record<string, any>) {
    return this.produitsService.update(id, produitDto);
  }

  /**
   * Supprimer un produit
   */
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('produits/:id')
  deleteProduit(@Param('id') id: string) {
    return this.produitsService.remove(id);
  }
}
