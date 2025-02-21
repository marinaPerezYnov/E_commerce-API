import { Module } from '@nestjs/common';
import { PersonnalisationGraphiqueModule } from './personnalisation-graphique.module';
import { PersonnalisationGraphiqueService } from './personnalisation-graphique.service';
import { PersonnalisationGraphiqueController } from './personnalisation-graphique.controller';

// https://docs.nestjs.com/techniques/database

@Module({
  imports: [PersonnalisationGraphiqueModule],
  providers: [PersonnalisationGraphiqueService],
  controllers: [PersonnalisationGraphiqueController],
  exports: [PersonnalisationGraphiqueService],
})
export class GraphicHttpModule {}
