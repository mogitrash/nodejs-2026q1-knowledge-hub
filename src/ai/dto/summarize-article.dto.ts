import { IsEnum, IsOptional } from 'class-validator';

export enum MaxLength {
  SHORT = 'short',
  MEDIUM = 'medium',
  DETAILED = 'detailed',
}

export class SummarizeArticleDto {
  @IsOptional()
  @IsEnum(MaxLength)
  maxLength?: MaxLength;
}

export interface SummarizeArticleResponseDto {
  articleId: string;
  summary: string;
  originalLength: number;
  summaryLength: number;
}
