import { Injectable } from '@nestjs/common';
import { ArticleService } from '../article.service';
import { CommentService } from 'src/comment/comment.service';

@Injectable()
export class DeleteArticleUseCase {
  constructor(
    private readonly articleService: ArticleService,
    private readonly commentService: CommentService,
  ) {}

  async execute(articleId: string): Promise<void> {
    await this.commentService.removeAllByArticleId(articleId);
    await this.articleService.remove(articleId);
  }
}
