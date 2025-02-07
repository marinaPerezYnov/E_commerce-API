import { Module } from '@nestjs/common';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';

@Module({
  imports: [],
  controllers: [ProduitsController],
  providers: [ProduitsService],
})
export class ProduitsModule {}
