import * as mongoose from 'mongoose';
import { Status } from './produits.service';

export const ProduitSchema = new mongoose.Schema({
  id: Number,
  ownerId: Number,
  nom: String,
  description: String,
  prix: Number,
  quantite: Number,
  status: {
    type: String,
    enum: Object.values(Status),
  },
  picture: String,
});
