import { IsString, IsNumber } from 'class-validator';
import { stringErrorText, numberErrorText } from 'apps/utils/text';
// import { Type } from 'class-transformer';

export class CreateProduitDto {
  @IsNumber(
    {},
    {
      message: numberErrorText,
    },
  )
  readonly id: number;

  @IsNumber(
    {},
    {
      message: numberErrorText,
    },
  )
  ownerId!: number;

  @IsString({
    message: stringErrorText,
  })
  nom!: string;

  @IsString({
    message: stringErrorText,
  })
  description!: string;

  @IsNumber(
    {},
    {
      message: numberErrorText,
    },
  )
  prix!: number;

  @IsNumber(
    {},
    {
      message: numberErrorText,
    },
  )
  quantite!: number;

  @IsString({
    message: stringErrorText,
  })
  status!: string;

  @IsString({
    message: stringErrorText,
  })
  picture!: string;
}
