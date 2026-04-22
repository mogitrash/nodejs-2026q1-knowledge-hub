import { HttpStatus } from '@nestjs/common';

export class UnauthorizedError extends Error {
  readonly statusCode = HttpStatus.UNAUTHORIZED;

  constructor(message: string) {
    super(message);
    this.name = UnauthorizedError.name;
  }
}
