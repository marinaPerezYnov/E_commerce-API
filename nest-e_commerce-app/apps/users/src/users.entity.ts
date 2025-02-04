import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// https://docs.nestjs.com/techniques/database

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  email: string;

  @Column()
  password: string;
}
