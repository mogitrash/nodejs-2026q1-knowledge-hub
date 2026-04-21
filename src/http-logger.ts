import { Logger } from '@nestjs/common';

type HttpLogLevel = 'error' | 'warn' | 'log' | 'debug' | 'verbose';

const httpLogger = new Logger('HTTP');

function resolveHttpLogLevel(): HttpLogLevel {
  const level = process.env.LOG_LEVEL?.toLowerCase();

  switch (level) {
    case 'error':
    case 'warn':
    case 'debug':
    case 'verbose':
      return level;
    default:
      return 'log';
  }
}

export function writeHttpLog(message: string): void {
  const level = resolveHttpLogLevel();

  switch (level) {
    case 'error':
      httpLogger.error(message);
      return;
    case 'warn':
      httpLogger.warn(message);
      return;
    case 'debug':
      httpLogger.debug(message);
      return;
    case 'verbose':
      httpLogger.verbose(message);
      return;
    default:
      httpLogger.log(message);
  }
}
