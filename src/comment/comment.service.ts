import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './entities/comment.entity';
import { ArticleService } from 'src/article/article.service';
import { PrismaService } from 'src/prisma/prisma.service';
import type { Comment as PrismaComment } from 'generated/prisma/client';

@Injectable()
export class CommentService {
  constructor(
    private readonly _articleService: ArticleService,
    private readonly _prismaService: PrismaService,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    try {
      await this._articleService.findOne(createCommentDto.articleId);
    } catch (error) {
      throw new UnprocessableEntityException('Article not found');
    }

    const comment = await this._prismaService.comment.create({
      data: {
        content: createCommentDto.content,
        articleId: createCommentDto.articleId,
        authorId: createCommentDto.authorId ?? null,
        createdAt: BigInt(Date.now()),
      },
    });

    return this._toCommentEntity(comment);
  }

  async findAll(articleId: string): Promise<Comment[]> {
    const comments = await this._prismaService.comment.findMany({
      where: { articleId },
    });

    return comments.map((comment) => this._toCommentEntity(comment));
  }

  async findOne(id: string): Promise<Comment | null> {
    const comment = await this._prismaService.comment.findUnique({
      where: { id },
    });

    return comment ? this._toCommentEntity(comment) : null;
  }

  async remove(id: string): Promise<void> {
    const comment = await this._prismaService.comment.findUnique({
      where: { id },
    });

    if (!comment) {
      throw new NotFoundException('Comment not found');
    }

    await this._prismaService.comment.delete({
      where: { id },
    });
  }

  private _toCommentEntity(comment: PrismaComment): Comment {
    return {
      id: comment.id,
      content: comment.content,
      articleId: comment.articleId,
      authorId: comment.authorId,
      createdAt: Number(comment.createdAt),
    };
  }
}
