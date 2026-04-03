import { IsUUID } from 'class-validator';

export class IdParamsDto {
  @IsUUID('4')
  id: string;
}
