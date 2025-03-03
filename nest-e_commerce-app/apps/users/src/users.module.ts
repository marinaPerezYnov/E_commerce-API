import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { Shop } from 'apps/shop/src/shop.entity';
import { AuthModule } from 'apps/auth/src/auth.module';
import { ProduitsModule } from 'apps/produits/src/produits.module';
import { PersonnalisationGraphiqueModule } from 'apps/personnalisation-graphique/src/personnalisation-graphique.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Shop]),
    ConfigModule,
    forwardRef(() => AuthModule),
    forwardRef(() => ProduitsModule),
    forwardRef(() => PersonnalisationGraphiqueModule),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}