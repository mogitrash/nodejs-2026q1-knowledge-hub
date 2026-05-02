import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AiRateLimitGuard } from './ai-rate-limit.guard';
import { AiService } from './ai.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { AnalyzeArticleDto } from './dto/analyze-article.dto';
import { SummarizeArticleDto } from './dto/summarize-article.dto';
import { TranslateArticleRequestDto } from './dto/translate-article.dto';
import { ArticleIdParamDto } from './dto/article-id-param.dto';
import { GenerateDto } from './dto/generate.dto';

@Controller('ai')
export class AiController {
  constructor(private readonly aiService: AiService) {}

  @Public()
  @Get('usage')
  getUsage() {
    return this.aiService.getUsageSnapshot();
  }

  @Public()
  @UseGuards(AiRateLimitGuard)
  @Post('articles/:articleId/summarize')
  async summarizeArticle(
    @Param() params: ArticleIdParamDto,
    @Body() summarizeArticleDto: SummarizeArticleDto,
  ) {
    return this.aiService.summarizeArticle(
      params.articleId,
      summarizeArticleDto,
    );
  }

  @Public()
  @UseGuards(AiRateLimitGuard)
  @Post('articles/:articleId/translate')
  async translateArticle(
    @Param() params: ArticleIdParamDto,
    @Body() dto: TranslateArticleRequestDto,
  ) {
    return this.aiService.translateArticle(params.articleId, dto);
  }

  @Public()
  @UseGuards(AiRateLimitGuard)
  @Post('articles/:articleId/analyze')
  async analyzeArticle(
    @Param() params: ArticleIdParamDto,
    @Body() dto: AnalyzeArticleDto,
  ) {
    return this.aiService.analyzeArticle(params.articleId, dto);
  }

  @Public()
  @UseGuards(AiRateLimitGuard)
  @Post('generate')
  async generate(@Body() dto: GenerateDto) {
    return this.aiService.generate(dto.prompt);
  }
}
