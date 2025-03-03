import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'), // Remplacez par votre URL de connexion MongoDB
  ],
  providers: [...databaseProviders],
  exports: [...databaseProviders, MongooseModule],
})
export class DatabaseModule {}
