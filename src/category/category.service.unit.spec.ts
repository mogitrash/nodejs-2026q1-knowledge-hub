import { Test, TestingModule } from '@nestjs/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/shared/errors/not-found.error';
import { CategoryService } from './category.service';

describe('CategoryService', () => {
  let service: CategoryService;

  const prismaServiceMock = {
    category: {
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
        CategoryService,
        { provide: PrismaService, useValue: prismaServiceMock },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('creates category', async () => {
    prismaServiceMock.category.create.mockResolvedValueOnce({
      id: 'c1',
      name: 'NestJS',
      description: 'Framework',
    });

    const result = await service.create({
      name: 'NestJS',
      description: 'Framework',
    });

    expect(prismaServiceMock.category.create).toHaveBeenCalledWith({
      data: { name: 'NestJS', description: 'Framework' },
    });
    expect(result).toEqual({
      id: 'c1',
      name: 'NestJS',
      description: 'Framework',
    });
  });

  it('returns all categories', async () => {
    prismaServiceMock.category.findMany.mockResolvedValueOnce([
      { id: 'c1', name: 'A', description: 'A desc' },
      { id: 'c2', name: 'B', description: 'B desc' },
    ]);

    const result = await service.findAll();

    expect(result).toHaveLength(2);
  });

  it('throws NotFoundError when category is missing', async () => {
    prismaServiceMock.category.findUnique.mockResolvedValueOnce(null);

    await expect(service.findOne('missing')).rejects.toBeInstanceOf(
      NotFoundError,
    );
  });

  it('updates category', async () => {
    prismaServiceMock.category.findUnique.mockResolvedValueOnce({ id: 'c1' });
    prismaServiceMock.category.update.mockResolvedValueOnce({
      id: 'c1',
      name: 'Updated',
      description: 'Updated desc',
    });

    const result = await service.update('c1', {
      name: 'Updated',
      description: 'Updated desc',
    });

    expect(prismaServiceMock.category.update).toHaveBeenCalledWith({
      where: { id: 'c1' },
      data: { name: 'Updated', description: 'Updated desc' },
    });
    expect(result.name).toBe('Updated');
  });

  it('throws NotFoundError when removing missing category', async () => {
    prismaServiceMock.category.findUnique.mockResolvedValueOnce(null);

    await expect(service.remove('missing')).rejects.toBeInstanceOf(
      NotFoundError,
    );
    expect(prismaServiceMock.category.delete).not.toHaveBeenCalled();
  });
});
