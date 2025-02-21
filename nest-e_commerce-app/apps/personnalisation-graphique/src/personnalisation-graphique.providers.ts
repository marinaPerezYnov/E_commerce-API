import { Connection } from 'mongoose';
import { PersonnalisationGraphiqueSchema } from './personnalisation-graphique.schema';

export const personnalisationGraphiqueProviders = [
  {
    provide: 'PERSONNALISATIONGRAPHIQUE_MODEL',
    useFactory: (connection: Connection) =>
      connection.model(
        'PersonnalisationGraphic',
        PersonnalisationGraphiqueSchema,
      ),
    inject: ['DATABASE_CONNECTION'],
  },
];
