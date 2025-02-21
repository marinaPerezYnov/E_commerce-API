import { NestFactory } from '@nestjs/core';
import { PersonnalisationGraphiqueModule } from './personnalisation-graphique.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(PersonnalisationGraphiqueModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('DB_PORT_GRAPHIC_SERVICE') || 3000;
  await app.listen(port);
}
bootstrap();
