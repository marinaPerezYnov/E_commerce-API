import { IsString, IsNumber } from 'class-validator';
// import { Type } from 'class-transformer';

export class CreateProduitDto {
  //   @Type(() => Number)
  @IsNumber()
  readonly id: number;

  @IsNumber()
  ownerId!: number;

  @IsString()
  nom!: string;

  @IsString()
  description!: string;

  @IsNumber()
  prix!: number;

  @IsNumber()
  quantite!: number;

  @IsString()
  status!: string;

  @IsString()
  picture!: string;
}
