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

  async execute(userId: string): Promise<void> {
    await this.articleService.removeAuthor(userId);
    await this.commentService.removeAllByAuthorId(userId);
    await this.userService.remove(userId);
  }
}
