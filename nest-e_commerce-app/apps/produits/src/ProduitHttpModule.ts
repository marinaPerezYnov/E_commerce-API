import { Module } from '@nestjs/common';
import { ProduitsModule } from './produits.module';
import { ProduitsService } from './produits.service';
import { ProduitsController } from './produits.controller';

// https://docs.nestjs.com/techniques/database

@Module({
  imports: [ProduitsModule],
  providers: [ProduitsService],
  controllers: [ProduitsController],
  exports: [ProduitsService],
})
export class ProduitHttpModule {}
