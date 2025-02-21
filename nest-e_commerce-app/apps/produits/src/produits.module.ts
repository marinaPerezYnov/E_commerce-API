import { Module } from '@nestjs/common';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';
import { DatabaseModule } from 'database.module';
import { produitProviders } from './produits.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [ProduitsController],
  providers: [ProduitsService, ...produitProviders],
})
export class ProduitsModule {}
