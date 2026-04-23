import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NextFunction, Request, Response } from 'express';
import { writeHttpLog } from './http-logger';
import { HttpExceptionFilter } from './http-exception-filter';

const SENSITIVE_FIELD_PATTERN = /(password|token)/i;

let app: INestApplication | null = null;

function sanitizeForLog(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((entry) => sanitizeForLog(entry));
  }

  if (value && typeof value === 'object') {
    return Object.entries(value).reduce<Record<string, unknown>>(
      (acc, [key, nestedValue]) => {
        acc[key] = SENSITIVE_FIELD_PATTERN.test(key)
          ? '[REDACTED]'
          : sanitizeForLog(nestedValue);
        return acc;
      },
      {},
    );
  }

  return value;
}

async function bootstrap() {
  app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug', 'verbose'],
  });

  app.use((req: Request, res: Response, next: NextFunction) => {
    const startedAt = Date.now();
    const sanitizedQuery = sanitizeForLog(req.query);
    const sanitizedBody = sanitizeForLog(req.body);

    writeHttpLog(
      `Incoming ${req.method} ${req.originalUrl} | query=${JSON.stringify(sanitizedQuery)} | body=${JSON.stringify(sanitizedBody)}`,
    );

    res.on('finish', () => {
      const durationMs = Date.now() - startedAt;
      writeHttpLog(
        `Outgoing ${req.method} ${req.originalUrl} | status=${res.statusCode} | durationMs=${durationMs}`,
      );
    });

    next();
  });

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('Knowledge Hub')
    .setDescription(
      'Knowledge hub service for managing articles, categories, and comments',
    )
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, documentFactory);

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();

async function shutDown(error: unknown): Promise<void> {
  const httpLogger = new Logger('Shutdown');

  if (error instanceof Error) {
    httpLogger.error(error.message, error.stack);
  } else {
    httpLogger.error('Unknown error', error);
  }

  if (app) {
    await app.close();
  }

  process.exit(1);
}

process.on('uncaughtException', async (error) => {
  await shutDown(error);
});

process.on('unhandledRejection', async (error) => {
  await shutDown(error);
});
