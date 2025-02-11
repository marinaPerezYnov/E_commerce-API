import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentEntity } from './payment.entity';

@Injectable()
export class PaymentService {
  constructor(
    @InjectRepository(PaymentEntity)
    private paymentRepository: Repository<PaymentEntity>,
  ) {}

  findAll(): Promise<PaymentEntity[]> {
    return this.paymentRepository.find();
  }

  async findOne(id: number): Promise<PaymentEntity> {
    const payment = await this.paymentRepository.findOneBy({ id });
    if (!payment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return payment;
  }

  create(payment: Partial<PaymentEntity>): Promise<PaymentEntity> {
    const newPayment = this.paymentRepository.create(payment);
    return this.paymentRepository.save(newPayment);
  }

  async update(
    id: number,
    payment: Partial<PaymentEntity>,
  ): Promise<PaymentEntity> {
    await this.paymentRepository.update(id, payment);
    const updatedPayment = await this.paymentRepository.findOneBy({ id });
    if (!updatedPayment) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
    return updatedPayment;
  }

  async remove(id: number): Promise<void> {
    const result = await this.paymentRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Payment with ID ${id} not found`);
    }
  }
}
