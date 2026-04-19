import { IsOptional, IsString, IsUUID, ValidateIf } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  content: string;

  @IsUUID()
  articleId: string;

  @ValidateIf((object, value) => value !== null)
  @IsOptional()
  @IsUUID()
  authorId?: string | null;
}
