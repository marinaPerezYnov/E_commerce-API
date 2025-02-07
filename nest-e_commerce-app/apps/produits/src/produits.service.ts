import { Injectable } from '@nestjs/common';

@Injectable()
export class ProduitsService {
  getHello(): string {
    return 'Hello World!';
  }
}

export enum Status {
  Available = 'Disponible',
  Reserved = 'Reservé',
  Waiting = 'En attente',
}
