import { Injectable } from '@nestjs/common';
import { ArticleService } from '../article.service';

@Injectable()
export class DeleteArticleUseCase {
  constructor(private readonly articleService: ArticleService) {}

  async execute(articleId: string): Promise<void> {
    await this.articleService.remove(articleId);
  }
}
