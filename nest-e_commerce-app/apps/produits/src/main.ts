import { NestFactory } from '@nestjs/core';
import { ProduitsModule } from './produits.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(ProduitsModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('DB_PORT_PRODUCTS_SERVICE') || 3000;
  await app.listen(port);
}
bootstrap();
