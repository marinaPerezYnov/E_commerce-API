import { Test, TestingModule } from '@nestjs/testing';
import { PersonnalisationGraphiqueController } from './personnalisation-graphique.controller';
import { PersonnalisationGraphiqueService } from './personnalisation-graphique.service';

describe('PersonnalisationGraphiqueController', () => {
  let personnalisationGraphiqueController: PersonnalisationGraphiqueController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PersonnalisationGraphiqueController],
      providers: [PersonnalisationGraphiqueService],
    }).compile();

    personnalisationGraphiqueController =
      app.get<PersonnalisationGraphiqueController>(
        PersonnalisationGraphiqueController,
      );
  });
});
