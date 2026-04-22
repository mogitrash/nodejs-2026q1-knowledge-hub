import { HttpStatus } from '@nestjs/common';

export class NotFoundError extends Error {
  readonly statusCode = HttpStatus.NOT_FOUND;

  constructor(message: string) {
    super(message);
    this.name = NotFoundError.name;
  }
}
