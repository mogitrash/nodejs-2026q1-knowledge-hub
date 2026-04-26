import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { UnauthorizedError } from 'src/shared/errors/unauthorized.error';
import { AccessTokenGuard } from './access-token.guard';

describe('AccessTokenGuard', () => {
  let guard: AccessTokenGuard;
  const request = { headers: {} as Record<string, string>, user: undefined };

  const reflectorMock = {
    getAllAndOverride: vi.fn(),
  };

  const jwtServiceMock = {
    verifyAsync: vi.fn(),
  };

  const contextMock = {
    getHandler: vi.fn(),
    getClass: vi.fn(),
    switchToHttp: vi.fn(() => ({
      getRequest: vi.fn(() => request),
    })),
  } as unknown as ExecutionContext;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AccessTokenGuard,
        { provide: Reflector, useValue: reflectorMock },
        { provide: JwtService, useValue: jwtServiceMock },
      ],
    }).compile();

    guard = module.get<AccessTokenGuard>(AccessTokenGuard);
  });

  afterEach(() => {
    request.headers = {};
    request.user = undefined;
    vi.clearAllMocks();
  });

  it('allows public route', async () => {
    reflectorMock.getAllAndOverride.mockReturnValueOnce(true);

    await expect(guard.canActivate(contextMock)).resolves.toBe(true);
  });

  it('throws when authorization header is missing', async () => {
    reflectorMock.getAllAndOverride.mockReturnValueOnce(false);

    await expect(guard.canActivate(contextMock)).rejects.toBeInstanceOf(
      UnauthorizedError,
    );
  });

  it('throws when authorization header is malformed', async () => {
    reflectorMock.getAllAndOverride.mockReturnValueOnce(false);
    request.headers.authorization = 'bad-token';

    await expect(guard.canActivate(contextMock)).rejects.toBeInstanceOf(
      UnauthorizedError,
    );
  });

  it('allows valid token', async () => {
    reflectorMock.getAllAndOverride.mockReturnValueOnce(false);
    request.headers.authorization = 'Bearer token';
    jwtServiceMock.verifyAsync.mockResolvedValueOnce({
      userId: 'u1',
      login: 'john',
      role: 'viewer',
    });

    await expect(guard.canActivate(contextMock)).resolves.toBe(true);
    expect(request.user).toEqual({
      userId: 'u1',
      login: 'john',
      role: 'viewer',
    });
  });

  it('throws when token is invalid', async () => {
    reflectorMock.getAllAndOverride.mockReturnValueOnce(false);
    request.headers.authorization = 'Bearer bad-token';
    jwtServiceMock.verifyAsync.mockRejectedValueOnce(new Error('invalid'));

    await expect(guard.canActivate(contextMock)).rejects.toBeInstanceOf(
      UnauthorizedError,
    );
  });
});
