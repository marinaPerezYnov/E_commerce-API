import { Injectable } from '@nestjs/common';

@Injectable()
export class ProduitsService {
  create(product): string {
    return 'Produit créé';
  }

  findAll(): string {
    return 'Produits trouvés';
  }

  findOne(id): string {
    return 'Produit trouvé';
  }

  update(id, product): string {
    return 'Produit mis à jour';
  }

  remove(id): string {
    return 'Produit supprimé';
  }
}

export enum Status {
  Available = 'Disponible',
  Reserved = 'Reservé',
  Waiting = 'En attente',
}
