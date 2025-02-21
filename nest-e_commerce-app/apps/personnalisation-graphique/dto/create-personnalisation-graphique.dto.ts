import { IsString, IsNumber } from 'class-validator';

export class CreatePersonnalisationGraphiqueDto {
  @IsNumber()
  readonly id: number;

  @IsNumber()
  ownerId!: number;

  @IsString()
  primaryColor!: string;

  @IsString()
  secondaryColor!: string;

  @IsString()
  thirdcolor!: string;

  @IsString()
  firstPolice!: string;

  @IsString()
  secondaryPolice!: string;

  @IsString()
  globalBackgroundImage!: string;

  @IsString()
  otherBackgroundImage!: string;
}
