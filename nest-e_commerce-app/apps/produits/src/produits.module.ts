import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';
import { DatabaseModule } from 'database.module';
import { produitProviders } from './produits.providers';
import { AuthModule } from 'apps/auth/src/auth.module';
import { UsersModule } from 'apps/users/src/users.module';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule), forwardRef(() => UsersModule)],
  controllers: [ProduitsController],
  providers: [ProduitsService, ...produitProviders],
  exports: [ProduitsService, ...produitProviders],
})
export class ProduitsModule {}
