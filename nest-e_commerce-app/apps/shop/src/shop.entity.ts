import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Correspond à la configuration de la boutique et à sa création

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ownerId: number;

  @Column()
  themeConfig: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
