import { Test, TestingModule } from '@nestjs/testing';
import { hash, compare } from 'bcrypt';
import { $Enums } from 'generated/prisma/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { PrismaService } from 'src/prisma/prisma.service';
import { ForbiddenError } from 'src/shared/errors/forbidden.error';
import { NotFoundError } from 'src/shared/errors/not-found.error';
import { UserRole } from './entities';
import { UserService } from './user.service';

vi.mock('bcrypt', () => ({
  hash: vi.fn(),
  compare: vi.fn(),
}));

describe('UserService', () => {
  let service: UserService;

  const prismaServiceMock = {
    user: {
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
        UserService,
        { provide: PrismaService, useValue: prismaServiceMock },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('creates user with hashed password and viewer role', async () => {
    vi.mocked(hash).mockResolvedValueOnce('hashed-password' as never);
    prismaServiceMock.user.create.mockResolvedValueOnce({
      id: 'u1',
      login: 'john',
      password: 'hashed-password',
      role: $Enums.UserRole.VIEWER,
      createdAt: BigInt(10),
      updatedAt: BigInt(11),
    });

    const result = await service.create({ login: 'john', password: 'secret' });

    expect(hash).toHaveBeenCalledWith('secret', expect.any(Number));
    expect(prismaServiceMock.user.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        login: 'john',
        password: 'hashed-password',
        role: $Enums.UserRole.VIEWER,
      }),
    });
    expect(result).toEqual({
      id: 'u1',
      login: 'john',
      password: 'hashed-password',
      role: UserRole.VIEWER,
      createdAt: 10,
      updatedAt: 11,
    });
  });

  it('returns users', async () => {
    prismaServiceMock.user.findMany.mockResolvedValueOnce([
      {
        id: 'u1',
        login: 'john',
        password: 'hash',
        role: $Enums.UserRole.ADMIN,
        createdAt: BigInt(1),
        updatedAt: BigInt(2),
      },
    ]);

    const result = await service.findAll();

    expect(result[0].role).toBe(UserRole.ADMIN);
  });

  it('throws NotFoundError when user is missing', async () => {
    prismaServiceMock.user.findUnique.mockResolvedValueOnce(null);

    await expect(service.findOne('missing')).rejects.toBeInstanceOf(NotFoundError);
  });

  it('updates password', async () => {
    prismaServiceMock.user.findUnique.mockResolvedValueOnce({
      id: 'u1',
      password: 'old-hash',
    });
    vi.mocked(compare).mockResolvedValueOnce(true as never);
    vi.mocked(hash).mockResolvedValueOnce('new-hash' as never);
    prismaServiceMock.user.update.mockResolvedValueOnce({
      id: 'u1',
      login: 'john',
      password: 'new-hash',
      role: $Enums.UserRole.VIEWER,
      createdAt: BigInt(1),
      updatedAt: BigInt(2),
    });

    const result = await service.update('u1', {
      oldPassword: 'old',
      newPassword: 'new',
    });

    expect(compare).toHaveBeenCalledWith('old', 'old-hash');
    expect(prismaServiceMock.user.update).toHaveBeenCalledWith({
      where: { id: 'u1' },
      data: expect.objectContaining({ password: 'new-hash' }),
    });
    expect(result.password).toBe('new-hash');
  });

  it('throws ForbiddenError for wrong old password', async () => {
    prismaServiceMock.user.findUnique.mockResolvedValueOnce({
      id: 'u1',
      password: 'old-hash',
    });
    vi.mocked(compare).mockResolvedValueOnce(false as never);

    await expect(
      service.update('u1', { oldPassword: 'bad', newPassword: 'new' }),
    ).rejects.toBeInstanceOf(ForbiddenError);
  });

  it('removes user', async () => {
    prismaServiceMock.user.findUnique.mockResolvedValueOnce({ id: 'u1' });
    prismaServiceMock.user.delete.mockResolvedValueOnce(undefined);

    await service.remove('u1');

    expect(prismaServiceMock.user.delete).toHaveBeenCalledWith({
      where: { id: 'u1' },
    });
  });

  it('finds user by login', async () => {
    prismaServiceMock.user.findUnique.mockResolvedValueOnce({
      id: 'u1',
      login: 'john',
      password: 'hash',
      role: $Enums.UserRole.EDITOR,
      createdAt: BigInt(1),
      updatedAt: BigInt(2),
    });

    const result = await service.findByLogin('john');

    expect(prismaServiceMock.user.findUnique).toHaveBeenCalledWith({
      where: { login: 'john' },
    });
    expect(result.role).toBe(UserRole.EDITOR);
  });
});
