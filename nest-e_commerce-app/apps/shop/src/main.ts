import { NestFactory } from '@nestjs/core';
import { ShopModule } from './shop.module';

async function bootstrap() {
  const app = await NestFactory.create(ShopModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
