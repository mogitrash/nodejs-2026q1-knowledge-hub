import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class TranslateArticleRequestDto {
  @IsNotEmpty()
  @IsString()
  targetLanguage: string;

  @IsOptional()
  @IsString()
  sourceLanguage?: string;
}

export interface TranslateArticleResponseDto {
  articleId: string;
  translatedText: string;
  detectedLanguage: string;
}
