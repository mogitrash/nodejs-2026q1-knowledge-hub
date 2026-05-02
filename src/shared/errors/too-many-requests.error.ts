import { HttpStatus } from '@nestjs/common';

export class TooManyRequestsError extends Error {
  readonly statusCode = HttpStatus.TOO_MANY_REQUESTS;
  readonly retryAfterSeconds?: number;

  constructor(message: string, retryAfterSeconds?: number) {
    super(message);
    this.name = TooManyRequestsError.name;
    if (retryAfterSeconds !== undefined) {
      this.retryAfterSeconds = retryAfterSeconds;
    }
  }
}
