import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🔹 Configuration de Swagger avec Bearer Auth
  const config = new DocumentBuilder()
    .setTitle('API de mon projet')
    .setDescription('Documentation de l’API')
    .setVersion('1.0')
    .addBearerAuth() // 🔐 Ajout de l'authentification Bearer
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // 📌 Swagger accessible à /api

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
