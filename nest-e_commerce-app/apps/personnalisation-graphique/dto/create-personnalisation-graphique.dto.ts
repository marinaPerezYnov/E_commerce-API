import { IsString, IsNumber } from 'class-validator';
import { stringErrorText, numberErrorText } from 'apps/utils/text';

export class CreatePersonnalisationGraphiqueDto {
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
  primaryColor!: string;

  @IsString({
    message: stringErrorText,
  })
  secondaryColor!: string;

  @IsString({
    message: stringErrorText,
  })
  thirdcolor!: string;

  @IsString({
    message: stringErrorText,
  })
  firstPolice!: string;

  @IsString({
    message: stringErrorText,
  })
  secondaryPolice!: string;

  @IsString({
    message: stringErrorText,
  })
  globalBackgroundImage!: string;

  @IsString({
    message: stringErrorText,
  })
  otherBackgroundImage!: string;
}
