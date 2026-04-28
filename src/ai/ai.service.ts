import { createUserContent, GoogleGenAI } from '@google/genai';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MaxLength, SummarizeArticleDto } from './dto/summarize-article.dto';
import { NotFoundError } from 'src/shared/errors/not-found.error';

@Injectable()
export class AiService {
  private readonly _ai = new GoogleGenAI({});

  constructor(private readonly _prismaService: PrismaService) {}

  async summarizeArticle(
    articleId: string,
    summarizeArticleDto: SummarizeArticleDto,
  ) {
    const { maxLength = MaxLength.MEDIUM } = summarizeArticleDto;

    const article = await this._prismaService.article.findUnique({
      where: { id: articleId },
    });

    console.log(article.content);

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

    return response.text;
  }
}
