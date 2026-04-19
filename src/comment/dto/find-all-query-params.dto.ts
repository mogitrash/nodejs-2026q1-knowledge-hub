import { IsUUID } from 'class-validator';

export class FindAllQueryParamsDto {
  @IsUUID()
  articleId: string;
}
