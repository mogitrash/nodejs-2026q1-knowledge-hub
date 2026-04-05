import { Injectable } from '@nestjs/common';
import { ArticleService } from '../article.service';
import { CommentService } from 'src/comment/comment.service';

@Injectable()
export class DeleteArticleUseCase {
  constructor(
    private readonly articleService: ArticleService,
    private readonly commentService: CommentService,
  ) {}

  execute(articleId: string) {
    this.articleService.remove(articleId);
    this.commentService.removeAllByArticleId(articleId);

    return;
  }
}
