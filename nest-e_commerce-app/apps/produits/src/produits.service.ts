import { Injectable } from '@nestjs/common';

@Injectable()
export class ProduitsService {
  getHello(): string {
    return 'Hello World!';
  }
}
