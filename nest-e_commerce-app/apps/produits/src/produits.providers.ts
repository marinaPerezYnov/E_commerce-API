import { Connection } from 'mongoose';
import { ProduitSchema } from './produits.schema';

export const produitProviders = [
  {
    provide: 'PRODUIT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Produit', ProduitSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
