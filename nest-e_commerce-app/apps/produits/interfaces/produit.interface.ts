import { Document } from 'mongoose';
import { Status } from '../src/produits.service';

export interface Produit extends Document {
  readonly id: number;
  readonly ownerId: number;
  readonly nom: string;
  readonly description: string;
  readonly prix: number;
  readonly quantite: number;
  readonly status: Status;
  readonly picture: string;
}
