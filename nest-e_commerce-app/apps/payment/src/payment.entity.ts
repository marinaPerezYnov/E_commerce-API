import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Correspond à la configuration des paiements et à leur création

@Entity()
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  currency: string;

  @Column()
  paymentMethod: string;

  @Column()
  transactionId: string;

  @Column()
  status: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
