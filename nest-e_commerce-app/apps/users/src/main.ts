import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);
  const config = app.get('ConfigService');
  console.log(config.get('GRAPHICPERSONNALISATIONSERVICE'));
  // await app.listen(process.env.GRAPHICPERSONNALISATIONSERVICE);
  await app.listen(config.get('GRAPHICPERSONNALISATIONSERVICE') || 3000);
}
bootstrap();
