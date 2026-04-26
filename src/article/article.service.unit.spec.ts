import { Test, TestingModule } from '@nestjs/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { $Enums } from 'generated/prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/shared/errors/not-found.error';
import { ArticleStatus } from './entities/article.entity';
import { ArticleService } from './article.service';

describe('ArticleService', () => {
  let service: ArticleService;

  const prismaServiceMock = {
    article: {
      create: vi.fn(),
      findMany: vi.fn(),
      findUnique: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ArticleService,
        { provide: PrismaService, useValue: prismaServiceMock },
      ],
    }).compile();

    service = module.get<ArticleService>(ArticleService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('creates article', async () => {
    prismaServiceMock.article.create.mockResolvedValueOnce({
      id: 'a1',
      title: 't1',
      content: 'c1',
      status: $Enums.ArticleStatus.DRAFT,
      authorId: null,
      categoryId: null,
      tags: [{ id: 'tg1', name: 'nestjs' }],
      createdAt: BigInt(10),
      updatedAt: BigInt(11),
    });

    const result = await service.create({
      title: 't1',
      content: 'c1',
      tags: ['nestjs'],
    });

    expect(prismaServiceMock.article.create).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      id: 'a1',
      title: 't1',
      content: 'c1',
      status: ArticleStatus.DRAFT,
      authorId: null,
      categoryId: null,
      tags: ['nestjs'],
      createdAt: 10,
      updatedAt: 11,
    });
  });

  it('findAll applies filters', async () => {
    prismaServiceMock.article.findMany.mockResolvedValueOnce([]);

    await service.findAll({
      status: ArticleStatus.PUBLISHED,
      categoryId: 'category-1',
      tag: 'node',
    });

    expect(prismaServiceMock.article.findMany).toHaveBeenCalledWith({
      where: {
        status: $Enums.ArticleStatus.PUBLISHED,
        categoryId: 'category-1',
        tags: { some: { name: 'node' } },
      },
      include: { tags: true },
    });
  });

  it('findAll works without filters', async () => {
    prismaServiceMock.article.findMany.mockResolvedValueOnce([]);

    await service.findAll({});

    expect(prismaServiceMock.article.findMany).toHaveBeenCalledWith({
      where: {
        status: undefined,
        categoryId: undefined,
      },
      include: { tags: true },
    });
  });

  it('finds published article', async () => {
    prismaServiceMock.article.findUnique.mockResolvedValueOnce({
      id: 'a1',
      title: 't1',
      content: 'c1',
      status: $Enums.ArticleStatus.PUBLISHED,
      authorId: null,
      categoryId: null,
      tags: [],
      createdAt: BigInt(10),
      updatedAt: BigInt(11),
    });

    const result = await service.findOne('a1');

    expect(result.status).toBe(ArticleStatus.PUBLISHED);
  });

  it('throws NotFoundError in findOne when missing', async () => {
    prismaServiceMock.article.findUnique.mockResolvedValueOnce(null);

    await expect(service.findOne('missing')).rejects.toBeInstanceOf(
      NotFoundError,
    );
  });

  it('throws NotFoundError in update when missing', async () => {
    prismaServiceMock.article.findUnique.mockResolvedValueOnce(null);

    await expect(
      service.update('missing', { title: 'new', content: 'new-content' }),
    ).rejects.toBeInstanceOf(NotFoundError);
  });

  it('updates article with tags', async () => {
    prismaServiceMock.article.findUnique.mockResolvedValueOnce({
      id: 'a1',
      tags: [{ id: 'old-tag', name: 'old' }],
    });
    prismaServiceMock.article.update.mockResolvedValueOnce({
      id: 'a1',
      title: 'new',
      content: 'new-content',
      status: $Enums.ArticleStatus.ARCHIVED,
      authorId: null,
      categoryId: null,
      tags: [{ id: 'new-tag', name: 'new-tag' }],
      createdAt: BigInt(10),
      updatedAt: BigInt(12),
    });

    const result = await service.update('a1', {
      title: 'new',
      content: 'new-content',
      status: ArticleStatus.ARCHIVED,
      tags: ['new-tag'],
    });

    expect(prismaServiceMock.article.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 'a1' },
        include: { tags: true },
      }),
    );
    expect(result.status).toBe(ArticleStatus.ARCHIVED);
  });

  it('removes article', async () => {
    prismaServiceMock.article.findUnique.mockResolvedValueOnce({ id: 'a1' });
    prismaServiceMock.article.delete.mockResolvedValueOnce(undefined);

    await service.remove('a1');

    expect(prismaServiceMock.article.delete).toHaveBeenCalledWith({
      where: { id: 'a1' },
    });
  });

  it('throws NotFoundError in remove when missing', async () => {
    prismaServiceMock.article.findUnique.mockResolvedValueOnce(null);

    await expect(service.remove('missing')).rejects.toBeInstanceOf(
      NotFoundError,
    );
    expect(prismaServiceMock.article.delete).not.toHaveBeenCalled();
  });
});
