import { Module } from '@nestjs/common';
import { PersonnalisationGraphiqueController } from './personnalisation-graphique.controller';
import { PersonnalisationGraphiqueService } from './personnalisation-graphique.service';
import { DatabaseModule } from 'database.module';
import { personnalisationGraphiqueProviders } from './personnalisation-graphique.providers';
import { AuthModule } from 'apps/auth/src/auth.module';

@Module({
  imports: [DatabaseModule, AuthModule],
  controllers: [PersonnalisationGraphiqueController],
  providers: [
    PersonnalisationGraphiqueService,
    ...personnalisationGraphiqueProviders,
  ],
})
export class PersonnalisationGraphiqueModule {}
