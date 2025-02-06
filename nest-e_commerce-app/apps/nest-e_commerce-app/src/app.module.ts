import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './../../auth/src/auth.module';
import { UsersModule } from 'apps/users/src/users.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { DataSource } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
// import { User } from 'apps/users/src/users.entity';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    ConfigModule.forRoot({
      expandVariables: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
// Le paramètre synchronize: true ne doit pas être utilisé en production, sinon vous risquez de perdre des données de production.
export class AppModule {
  // le TypeORM DataSourceet EntityManagerles objets seront disponibles pour être injectés dans l'ensemble du projet
  // constructor(private dataSource: DataSource) {}
}
