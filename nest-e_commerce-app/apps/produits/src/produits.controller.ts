import { Controller, Get } from '@nestjs/common';
import { ProduitsService } from './produits.service';

@Controller()
export class ProduitsController {
  constructor(private readonly produitsService: ProduitsService) {}

  @Get()
  getHello(): string {
    return this.produitsService.getHello();
  }
}
