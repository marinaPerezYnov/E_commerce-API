import { Module } from '@nestjs/common';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Produit } from './produit.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Produit]), ConfigModule],
  controllers: [ProduitsController],
  providers: [ProduitsService],
  exports: [ProduitsService, TypeOrmModule],
})
export class ProduitsModule {}
