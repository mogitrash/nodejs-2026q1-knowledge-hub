import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ForbiddenError } from './shared/errors/forbidden.error';
import { NotFoundError } from './shared/errors/not-found.error';
import { UnauthorizedError } from './shared/errors/unauthorized.error';
import { ValidationError } from './shared/errors/validation.error';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name, {
    timestamp: true,
  });

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const request = ctx.getRequest<Request>();
    const response = ctx.getResponse<Response>();
    const isCustomError =
      exception instanceof ValidationError ||
      exception instanceof UnauthorizedError ||
      exception instanceof ForbiddenError ||
      exception instanceof NotFoundError;

    const statusCode = isCustomError
      ? exception.statusCode
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof Error ? exception.message : 'Internal server error';

    this.logger.error(
      `Exception ${message} | status=${statusCode} | path=${request.url}`,
      exception instanceof Error ? exception.stack : undefined,
    );

    response.status(statusCode).json({
      statusCode,
      message,
    });
  }
}
