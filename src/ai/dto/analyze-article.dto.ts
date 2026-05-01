import { IsEnum, IsOptional } from 'class-validator';

export enum AnalyzeTask {
  REVIEW = 'review',
  BUGS = 'bugs',
  OPTIMIZE = 'optimize',
  EXPLAIN = 'explain',
}

export class AnalyzeArticleDto {
  @IsOptional()
  @IsEnum(AnalyzeTask)
  task?: AnalyzeTask;
}

export enum AnalyzeSeverity {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
}

export interface AnalyzeArticleResponseDto {
  articleId: string;
  analysis: string;
  suggestions: string[];
  severity: AnalyzeSeverity;
}
