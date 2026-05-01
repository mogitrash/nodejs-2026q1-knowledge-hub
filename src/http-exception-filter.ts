import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ForbiddenError } from './shared/errors/forbidden.error';
import { NotFoundError } from './shared/errors/not-found.error';
import { TooManyRequestsError } from './shared/errors/too-many-requests.error';
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
      exception instanceof NotFoundError ||
      exception instanceof TooManyRequestsError;
    const isHttpException = exception instanceof HttpException;

    const statusCode = isCustomError
      ? exception.statusCode
      : isHttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message = isCustomError
      ? exception.message
      : isHttpException
        ? exception.message
        : 'An unexpected error occurred';
    const errorLabel = isCustomError
      ? exception.name
      : isHttpException
        ? HttpStatus[statusCode]
        : 'Internal Server Error';

    this.logger.error(
      `Exception ${message} | status=${statusCode} | path=${request.url}`,
      exception instanceof Error ? exception.stack : undefined,
    );

    if (
      exception instanceof TooManyRequestsError &&
      exception.retryAfterSeconds != null
    ) {
      response.setHeader('Retry-After', String(exception.retryAfterSeconds));
    }

    response.status(statusCode).json({
      statusCode,
      error: errorLabel,
      message,
    });
  }
}
