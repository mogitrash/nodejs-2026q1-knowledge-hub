import { Test, TestingModule } from '@nestjs/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ArticleService } from 'src/article/article.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/shared/errors/not-found.error';
import { ValidationError } from 'src/shared/errors/validation.error';
import { CommentService } from './comment.service';

describe('CommentService', () => {
  let service: CommentService;

  const articleServiceMock = {
    findOne: vi.fn(),
  };

  const prismaServiceMock = {
    comment: {
      create: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      delete: vi.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CommentService,
        { provide: ArticleService, useValue: articleServiceMock },
        { provide: PrismaService, useValue: prismaServiceMock },
      ],
    }).compile();

    service = module.get<CommentService>(CommentService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('creates comment', async () => {
    articleServiceMock.findOne.mockResolvedValueOnce({ id: 'article-1' });
    prismaServiceMock.comment.create.mockResolvedValueOnce({
      id: 'comment-1',
      content: 'hello',
      articleId: 'article-1',
      authorId: null,
      createdAt: BigInt(123),
    });

    const result = await service.create({
      content: 'hello',
      articleId: 'article-1',
      authorId: null,
    });

    expect(articleServiceMock.findOne).toHaveBeenCalledWith('article-1');
    expect(prismaServiceMock.comment.create).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      id: 'comment-1',
      content: 'hello',
      articleId: 'article-1',
      authorId: null,
      createdAt: 123,
    });
  });

  it('throws ValidationError when article not found on create', async () => {
    articleServiceMock.findOne.mockRejectedValueOnce(new Error('not found'));

    await expect(
      service.create({
        content: 'hello',
        articleId: 'missing-article',
        authorId: null,
      }),
    ).rejects.toBeInstanceOf(ValidationError);
    expect(prismaServiceMock.comment.create).not.toHaveBeenCalled();
  });

  it('returns comments by article id', async () => {
    prismaServiceMock.comment.findMany.mockResolvedValueOnce([
      {
        id: 'comment-1',
        content: 'a',
        articleId: 'article-1',
        authorId: null,
        createdAt: BigInt(10),
      },
      {
        id: 'comment-2',
        content: 'b',
        articleId: 'article-1',
        authorId: 'user-1',
        createdAt: BigInt(11),
      },
    ]);

    const result = await service.findAll('article-1');

    expect(prismaServiceMock.comment.findMany).toHaveBeenCalledWith({
      where: { articleId: 'article-1' },
    });
    expect(result).toEqual([
      {
        id: 'comment-1',
        content: 'a',
        articleId: 'article-1',
        authorId: null,
        createdAt: 10,
      },
      {
        id: 'comment-2',
        content: 'b',
        articleId: 'article-1',
        authorId: 'user-1',
        createdAt: 11,
      },
    ]);
  });

  it('returns null when comment not found in findOne', async () => {
    prismaServiceMock.comment.findUnique.mockResolvedValueOnce(null);

    const result = await service.findOne('missing-comment');

    expect(result).toBeNull();
  });

  it('removes comment', async () => {
    prismaServiceMock.comment.findUnique.mockResolvedValueOnce({
      id: 'comment-1',
    });
    prismaServiceMock.comment.delete.mockResolvedValueOnce(undefined);

    await service.remove('comment-1');

    expect(prismaServiceMock.comment.delete).toHaveBeenCalledWith({
      where: { id: 'comment-1' },
    });
  });

  it('throws NotFoundError when removing non-existent comment', async () => {
    prismaServiceMock.comment.findUnique.mockResolvedValueOnce(null);

    await expect(service.remove('missing-comment')).rejects.toBeInstanceOf(
      NotFoundError,
    );
    expect(prismaServiceMock.comment.delete).not.toHaveBeenCalled();
  });
});
