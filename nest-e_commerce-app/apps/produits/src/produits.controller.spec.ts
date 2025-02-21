import { Test, TestingModule } from '@nestjs/testing';
import { ProduitsController } from './produits.controller';
import { ProduitsService } from './produits.service';

describe('ProduitsController', () => {
  let produitsController: ProduitsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ProduitsController],
      providers: [ProduitsService],
    }).compile();

    produitsController = app.get<ProduitsController>(ProduitsController);
  });
});
