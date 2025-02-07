import { NestFactory } from '@nestjs/core';
import { ProduitsModule } from './produits.module';

async function bootstrap() {
  const app = await NestFactory.create(ProduitsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
