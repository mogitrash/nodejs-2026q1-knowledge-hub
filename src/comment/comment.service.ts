import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';
import { ArticleService } from 'src/article/article.service';

@Injectable()
export class CommentService {
  private _comments: Comment[] = [];

  constructor(
    @Inject(forwardRef(() => ArticleService))
    private readonly _articleService: ArticleService,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    try {
      this._articleService.findOne(createCommentDto.articleId);
    } catch (error) {
      throw new UnprocessableEntityException('Article not found');
    }

    const newComment: Comment = {
      id: crypto.randomUUID(),
      content: createCommentDto.content,
      articleId: createCommentDto.articleId,
      authorId: createCommentDto.authorId ?? null,
      createdAt: Date.now(),
    };

    this._comments.push(newComment);

    return newComment;
  }

  findAll(articleId: string) {
    return this._comments.filter((comment) => comment.articleId === articleId);
  }

  findOne(id: string) {
    return this._comments.find((comment) => comment.id === id);
  }

  remove(id: string) {
    const comment = this._comments.find((comment) => comment.id === id);

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    this._comments = this._comments.filter((comment) => comment.id !== id);

    return;
  }

  removeAllByArticleId(articleId: string) {
    this._comments = this._comments.filter(
      (comment) => comment.articleId !== articleId,
    );

    return;
  }

  removeAllByAuthorId(authorId: string) {
    this._comments = this._comments.filter(
      (comment) => comment.authorId !== authorId,
    );

    return;
  }
}
