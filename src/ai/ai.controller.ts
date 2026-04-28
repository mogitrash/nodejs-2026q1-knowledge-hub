import { Body, Controller, Param, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { SummarizeArticleDto } from './dto/summarize-article.dto';

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
}
