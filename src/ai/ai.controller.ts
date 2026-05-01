import { Body, Controller, Param, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { AnalyzeArticleDto } from './dto/analyze-article.dto';
import { SummarizeArticleDto } from './dto/summarize-article.dto';
import { TranslateArticleRequestDto } from './dto/translate-article.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Public()
  @Post('articles/:articleId/summarize')
  async summarizeArticle(
    @Param('articleId') articleId: string,
    @Body() summarizeArticleDto: SummarizeArticleDto,
  ) {
    return this.aiService.summarizeArticle(articleId, summarizeArticleDto);
  }

  @Public()
  @Post('articles/:articleId/translate')
  async translateArticle(
    @Param('articleId') articleId: string,
    @Body() dto: TranslateArticleRequestDto,
  ) {
    return this.aiService.translateArticle(articleId, dto);
  }

  @Public()
  @Post('articles/:articleId/analyze')
  async analyzeArticle(
    @Param('articleId') articleId: string,
    @Body() dto: AnalyzeArticleDto,
  ) {
    return this.aiService.analyzeArticle(articleId, dto);
  }
}
