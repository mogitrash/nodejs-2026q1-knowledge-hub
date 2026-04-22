import { HttpStatus } from '@nestjs/common';

export class ForbiddenError extends Error {
  readonly statusCode = HttpStatus.FORBIDDEN;

  constructor(message: string) {
    super(message);
    this.name = ForbiddenError.name;
  }
}
