import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
// https://docs.nestjs.com/techniques/database
import { Status } from './produits.service';
@Entity()
export class Produit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: true })
  isActive: boolean;

  @Column()
  nom: string;

  @Column()
  description: string;

  @Column()
  prix: number;

  @Column()
  quantite: number;

  @Column()
  status: Status;

  @Column()
  picture: string;
}
