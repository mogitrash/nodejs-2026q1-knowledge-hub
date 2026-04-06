import { Injectable } from '@nestjs/common';
import { UserService } from '../user.service';
import { ArticleService } from 'src/article/article.service';
import { CommentService } from 'src/comment/comment.service';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    private readonly userService: UserService,
    private readonly articleService: ArticleService,
    private readonly commentService: CommentService,
  ) {}

  execute(userId: string) {
    this.userService.remove(userId);
    this.articleService.removeAuthor(userId);
    this.commentService.removeAllByAuthorId(userId);

    return;
  }
}
