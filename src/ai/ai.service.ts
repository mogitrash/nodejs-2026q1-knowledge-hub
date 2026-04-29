import { GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  MaxLength,
  SummarizeArticleDto,
  SummarizeArticleResponseDto,
} from './dto/summarize-article.dto';
import { NotFoundError } from 'src/shared/errors/not-found.error';
import {
  TranslateArticleRequestDto,
  TranslateArticleResponseDto,
} from './dto/translate-article.dto';

@Injectable()
export class AiService {
  private readonly _ai = new GoogleGenAI({});

  constructor(private readonly _prismaService: PrismaService) {}

  async summarizeArticle(
    articleId: string,
    summarizeArticleDto: SummarizeArticleDto,
  ): Promise<SummarizeArticleResponseDto> {
    const { maxLength = MaxLength.MEDIUM } = summarizeArticleDto;

    const article = await this._prismaService.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new NotFoundError('Article not found');
    }

    let outputTokens = 0;

    switch (maxLength) {
      case MaxLength.SHORT:
        outputTokens = 100;
        break;
      case MaxLength.MEDIUM:
        outputTokens = 500;
        break;
      case MaxLength.DETAILED:
        outputTokens = 1000;
        break;
    }

    const response = await this._ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: `Article content: ${article.content}`,
      config: {
        systemInstruction:
          'You are a helpful assistant that summarizes articles. Article content is provided after the "Article content:" prefix.',
        maxOutputTokens: outputTokens,
      },
    });

    return {
      articleId,
      summary: response.text,
      originalLength: article.content.length,
      summaryLength: response.text.length,
    };
  }

  async translateArticle(
    articleId: string,
    translateArticleDto: TranslateArticleRequestDto,
  ): Promise<TranslateArticleResponseDto> {
    const { targetLanguage, sourceLanguage } = translateArticleDto;

    const article = await this._prismaService.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new NotFoundError('Article not found');
    }

    const response = await this._ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: [
        `Target language: ${targetLanguage}.`,
        sourceLanguage &&
          `Source hint: ${sourceLanguage} (use as detectedLanguage if it matches the text).`,
        `Article content: ${article.content}`,
      ].join('\n'),
      config: {
        responseMimeType: 'application/json',
        responseJsonSchema: {
          type: 'object',
          properties: {
            translatedText: { type: 'string' },
            detectedLanguage: {
              type: 'string',
              description: 'Language of the original article',
            },
          },
          required: ['translatedText', 'detectedLanguage'],
        },
        systemInstruction:
          'You translate articles. Respond with JSON only: full translation and detectedLanguage for the original text.',
      },
    });

    const { translatedText, detectedLanguage = sourceLanguage } = JSON.parse(
      response.text,
    ) as TranslateArticleResponseDto;

    return {
      articleId,
      translatedText,
      detectedLanguage: detectedLanguage,
    };
  }
}
