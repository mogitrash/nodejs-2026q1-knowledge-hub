import { HttpStatus } from '@nestjs/common';

export class ValidationError extends Error {
  readonly statusCode = HttpStatus.BAD_REQUEST;

  constructor(message: string) {
    super(message);
    this.name = ValidationError.name;
  }
}
