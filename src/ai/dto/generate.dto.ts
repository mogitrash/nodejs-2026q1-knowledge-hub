import { IsNotEmpty, IsString } from 'class-validator';

export class GenerateDto {
  @IsNotEmpty()
  @IsString()
  prompt: string;
}
