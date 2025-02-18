import { NestFactory } from '@nestjs/core';
import { ShopModule } from './shop.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ShopModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('DB_PORT_SHOP_MANAGER') || 3000;
  await app.listen(port);
}
bootstrap();
