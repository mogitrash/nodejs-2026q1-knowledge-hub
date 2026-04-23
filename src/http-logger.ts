import { Logger } from '@nestjs/common';
import { rename, stat, writeFile } from 'fs/promises';
import { join } from 'path';

type HttpLogLevel = 'error' | 'warn' | 'log' | 'debug' | 'verbose';

const httpLogger = new Logger('HTTP');
const LOG_MAX_FILE_SIZE_KB = Number(process.env.LOG_MAX_FILE_SIZE ?? 1024);

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

export class HttpLogger {
  private filePath: string;

  constructor() {
    this.filePath = this._createFilePath();
  }

  async writeHttpLog(message: string): Promise<void> {
    const level = resolveHttpLogLevel();

    await this._writeToFile(message);

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

  private async _writeToFile(message: string): Promise<void> {
    try {
      const file = await stat(this.filePath);

      if (file.size > LOG_MAX_FILE_SIZE_KB * 1024) {
        const rotatedFilePath = join(
          process.cwd(),
          `app-${new Date().toISOString().replace(/[:.]/g, '-')}.log`,
        );
        await rename(this.filePath, rotatedFilePath);
      }
    } catch (error) {
      const errorWithCode = error as NodeJS.ErrnoException;
      if (errorWithCode.code !== 'ENOENT') {
        throw error;
      }
    }

    await writeFile(this.filePath, `${new Date().toISOString()} ${message}\n`, {
      flag: 'a',
    });
  }

  private _createFilePath(): string {
    return join(process.cwd(), 'app.log');
  }
}
