import { Test, TestingModule } from '@nestjs/testing';
import { ShopController } from './shop.controller';
import { ShopService } from './shop.service';

describe('ShopController', () => {
  let shopController: ShopController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ShopController],
      providers: [ShopService],
    }).compile();

    shopController = app.get<ShopController>(ShopController);
  });
});
