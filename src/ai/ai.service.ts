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
  AnalyzeArticleDto,
  AnalyzeArticleResponseDto,
  AnalyzeTask,
} from './dto/analyze-article.dto';
import {
  TranslateArticleRequestDto,
  TranslateArticleResponseDto,
} from './dto/translate-article.dto';
import {
  ANALYZE_RESPONSE_JSON_SCHEMA,
  ANALYZE_SYSTEM_INSTRUCTION,
  buildAnalyzeContents,
  SUMMARIZE_SYSTEM_INSTRUCTION,
  buildSummarizeContents,
  TRANSLATE_RESPONSE_JSON_SCHEMA,
  TRANSLATE_SYSTEM_INSTRUCTION,
  buildTranslateContents,
} from './prompts';

function aiCacheTtlMs(): number {
  const raw = Number(process.env.AI_CACHE_TTL_SEC);
  const sec = Number.isFinite(raw) && raw > 0 ? Math.floor(raw) : 300;
  return sec * 1000;
}

@Injectable()
export class AiService {
  private readonly _ai = new GoogleGenAI({});
  private readonly _cacheTtlMs = aiCacheTtlMs();
  private readonly _cache = new Map<string, { exp: number; v: unknown }>();

  constructor(private readonly _prismaService: PrismaService) {}

  private _cacheGet<T>(key: string): T | undefined {
    const row = this._cache.get(key);
    if (!row) {
      return undefined;
    }
    if (Date.now() >= row.exp) {
      this._cache.delete(key);
      return undefined;
    }
    return row.v as T;
  }

  private _cacheSet(key: string, value: unknown): void {
    this._cache.set(key, { exp: Date.now() + this._cacheTtlMs, v: value });
  }

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

    const cacheKey = JSON.stringify([
      'summarize',
      articleId,
      article.updatedAt.toString(),
      maxLength,
    ]);
    const cached = this._cacheGet<SummarizeArticleResponseDto>(cacheKey);
    if (cached) {
      return cached;
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
      contents: buildSummarizeContents(article.content),
      config: {
        systemInstruction: SUMMARIZE_SYSTEM_INSTRUCTION,
        maxOutputTokens: outputTokens,
      },
    });

    const out: SummarizeArticleResponseDto = {
      articleId,
      summary: response.text,
      originalLength: article.content.length,
      summaryLength: response.text.length,
    };
    this._cacheSet(cacheKey, out);
    return out;
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

    const cacheKey = JSON.stringify([
      'translate',
      articleId,
      article.updatedAt.toString(),
      targetLanguage,
      sourceLanguage ?? null,
    ]);
    const cached = this._cacheGet<TranslateArticleResponseDto>(cacheKey);
    if (cached) {
      return cached;
    }

    const response = await this._ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: buildTranslateContents(
        targetLanguage,
        sourceLanguage,
        article.content,
      ),
      config: {
        responseMimeType: 'application/json',
        responseJsonSchema: TRANSLATE_RESPONSE_JSON_SCHEMA,
        systemInstruction: TRANSLATE_SYSTEM_INSTRUCTION,
      },
    });

    const { translatedText, detectedLanguage = sourceLanguage } = JSON.parse(
      response.text,
    ) as TranslateArticleResponseDto;

    const out: TranslateArticleResponseDto = {
      articleId,
      translatedText,
      detectedLanguage,
    };
    this._cacheSet(cacheKey, out);
    return out;
  }

  async analyzeArticle(
    articleId: string,
    analyzeArticleDto: AnalyzeArticleDto,
  ): Promise<AnalyzeArticleResponseDto> {
    const task = analyzeArticleDto.task ?? AnalyzeTask.REVIEW;

    const article = await this._prismaService.article.findUnique({
      where: { id: articleId },
    });

    if (!article) {
      throw new NotFoundError('Article not found');
    }

    const response = await this._ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: buildAnalyzeContents(task, article.content),
      config: {
        responseMimeType: 'application/json',
        responseJsonSchema: ANALYZE_RESPONSE_JSON_SCHEMA,
        systemInstruction: ANALYZE_SYSTEM_INSTRUCTION,
      },
    });

    const parsed = JSON.parse(response.text) as AnalyzeArticleResponseDto;

    return {
      articleId,
      analysis: parsed.analysis,
      suggestions: parsed.suggestions,
      severity: parsed.severity,
    };
  }

  async generate(prompt: string): Promise<string> {
    const response = await this._ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    return response.text;
  }
}
