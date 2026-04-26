import { ArgumentsHost, BadRequestException, Logger } from '@nestjs/common';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { NotFoundError } from './shared/errors/not-found.error';
import { HttpExceptionFilter } from './http-exception-filter';

describe('HttpExceptionFilter', () => {
  const response = {
    status: vi.fn(),
    json: vi.fn(),
  };

  const host = {
    switchToHttp: vi.fn(() => ({
      getRequest: vi.fn(() => ({ url: '/test' })),
      getResponse: vi.fn(() => response),
    })),
  } as unknown as ArgumentsHost;

  beforeEach(() => {
    response.status.mockReturnValue(response);
    vi.spyOn(Logger.prototype, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('returns custom error response', () => {
    new HttpExceptionFilter().catch(new NotFoundError('Missing'), host);

    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.json).toHaveBeenCalledWith({
      statusCode: 404,
      error: 'NotFoundError',
      message: 'Missing',
    });
  });

  it('returns http exception response', () => {
    new HttpExceptionFilter().catch(new BadRequestException('Bad input'), host);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
      statusCode: 400,
      error: 'BAD_REQUEST',
      message: 'Bad input',
    });
  });

  it('returns 500 for unknown error', () => {
    new HttpExceptionFilter().catch(new Error('Boom'), host);

    expect(response.status).toHaveBeenCalledWith(500);
    expect(response.json).toHaveBeenCalledWith({
      statusCode: 500,
      error: 'Internal Server Error',
      message: 'An unexpected error occurred',
    });
  });
});
