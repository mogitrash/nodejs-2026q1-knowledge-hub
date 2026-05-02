import { IsUUID } from 'class-validator';

export class ArticleIdParamDto {
  @IsUUID('4')
  articleId: string;
}
