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

  it('throws NotFoundError in remove when missing', async () => {
    prismaServiceMock.article.findUnique.mockResolvedValueOnce(null);

    await expect(service.remove('missing')).rejects.toBeInstanceOf(
      NotFoundError,
    );
    expect(prismaServiceMock.article.delete).not.toHaveBeenCalled();
  });
});
