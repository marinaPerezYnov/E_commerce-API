import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentEntity } from './payment.entity';

@Controller('payments')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}
  @Get()
  findAll(): Promise<PaymentEntity[]> {
    return this.paymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<PaymentEntity> {
    return this.paymentService.findOne(id);
  }

  @Post()
  create(@Body() payment: Partial<PaymentEntity>): Promise<PaymentEntity> {
    return this.paymentService.create(payment);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() payment: Partial<PaymentEntity>,
  ): Promise<PaymentEntity> {
    return this.paymentService.update(id, payment);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.paymentService.remove(id);
  }
}
