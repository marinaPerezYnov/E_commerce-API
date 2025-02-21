import { Document } from 'mongoose';

export interface PersonnalisationGraphic extends Document {
  readonly id: number;
  readonly ownerId: number;
  readonly primaryColor: string;
  readonly secondaryColor: string;
  readonly thirdcolor: string;
  readonly firstPolice: string;
  readonly secondaryPolice: string;
  readonly globalBackgroundImage: string;
  readonly otherBackgroundImage: string;
}
