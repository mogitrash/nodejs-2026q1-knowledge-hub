import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ForbiddenError } from 'src/shared/errors/forbidden.error';
import { NotFoundError } from 'src/shared/errors/not-found.error';
import { ValidationError } from 'src/shared/errors/validation.error';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { compare } from 'bcrypt';

vi.mock('bcrypt', () => ({
  compare: vi.fn(),
}));

describe('AuthService (unit, Vitest)', () => {
  let service: AuthService;

  const userServiceMock = {
    findByLogin: vi.fn(),
    create: vi.fn(),
  };

  const jwtServiceMock = {
    verifyAsync: vi.fn(),
    signAsync: vi.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UserService, useValue: userServiceMock },
        { provide: JwtService, useValue: jwtServiceMock },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  describe('signup', () => {
    it('creates a new user when login does not exist', async () => {
      userServiceMock.findByLogin.mockRejectedValueOnce(
        new NotFoundError('User not found'),
      );
      userServiceMock.create.mockResolvedValueOnce(undefined);

      const result = await service.signup({
        login: 'new-user',
        password: 'secret',
      });

      expect(userServiceMock.findByLogin).toHaveBeenCalledWith('new-user');
      expect(userServiceMock.create).toHaveBeenCalledWith({
        login: 'new-user',
        password: 'secret',
      });
      expect(result).toEqual({ message: 'User created successfully' });
    });

    it('throws ValidationError when login already exists', async () => {
      userServiceMock.findByLogin.mockResolvedValueOnce({
        id: 'u1',
        login: 'existing-user',
        password: 'hashed',
        role: 'viewer',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      await expect(
        service.signup({ login: 'existing-user', password: 'secret' }),
      ).rejects.toBeInstanceOf(ValidationError);

      expect(userServiceMock.create).not.toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('throws ForbiddenError when login is unknown', async () => {
      userServiceMock.findByLogin.mockRejectedValueOnce(
        new NotFoundError('User not found'),
      );

      await expect(
        service.login({ login: 'missing-user', password: 'secret' }),
      ).rejects.toBeInstanceOf(ForbiddenError);
    });

    it('throws ForbiddenError when password is wrong', async () => {
      userServiceMock.findByLogin.mockResolvedValueOnce({
        id: 'u2',
        login: 'john',
        password: 'stored-hash',
        role: 'viewer',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });

      vi.mocked(compare).mockResolvedValueOnce(false as never);

      await expect(
        service.login({ login: 'john', password: 'wrong-password' }),
      ).rejects.toBeInstanceOf(ForbiddenError);
    });

    it('returns access/refresh tokens for valid credentials', async () => {
      userServiceMock.findByLogin.mockResolvedValueOnce({
        id: 'u3',
        login: 'john',
        password: 'stored-hash',
        role: 'viewer',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      vi.mocked(compare).mockResolvedValueOnce(true as never);

      jwtServiceMock.signAsync
        .mockResolvedValueOnce('access-token')
        .mockResolvedValueOnce('refresh-token');

      const result = await service.login({
        login: 'john',
        password: 'correct-password',
      });

      expect(result).toEqual({
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      });
      expect(jwtServiceMock.signAsync).toHaveBeenCalledTimes(2);
    });
  });

  describe('refresh', () => {
    it('throws ForbiddenError when refresh token is invalid', async () => {
      jwtServiceMock.verifyAsync.mockRejectedValueOnce(new Error('bad token'));

      await expect(
        service.refresh({ refreshToken: 'invalid-token' }),
      ).rejects.toBeInstanceOf(ForbiddenError);
    });

    it('rotates tokens when refresh token is valid', async () => {
      jwtServiceMock.verifyAsync.mockResolvedValueOnce({
        userId: 'u4',
        login: 'alice',
        role: 'editor',
      });
      userServiceMock.findByLogin.mockResolvedValueOnce({
        id: 'u4',
        login: 'alice',
        password: 'stored-hash',
        role: 'editor',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      });
      jwtServiceMock.signAsync
        .mockResolvedValueOnce('new-access-token')
        .mockResolvedValueOnce('new-refresh-token');

      const result = await service.refresh({
        refreshToken: 'valid-refresh-token',
      });

      expect(jwtServiceMock.verifyAsync).toHaveBeenCalledTimes(1);
      expect(userServiceMock.findByLogin).toHaveBeenCalledWith('alice');
      expect(result).toEqual({
        accessToken: 'new-access-token',
        refreshToken: 'new-refresh-token',
      });
    });
  });
});
