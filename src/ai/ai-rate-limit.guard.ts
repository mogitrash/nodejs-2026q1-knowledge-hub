import { CanActivate, Injectable } from '@nestjs/common';
import { TooManyRequestsError } from 'src/shared/errors/too-many-requests.error';

const WINDOW_MS = 60000;
const DEFAULT_RPM = 20;

function rpmLimit(): number {
  const n = Number(process.env.AI_RATE_LIMIT_RPM);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : DEFAULT_RPM;
}

@Injectable()
export class AiRateLimitGuard implements CanActivate {
  private _windowStart = Date.now();
  private _count = 0;
  private readonly _limit = rpmLimit();

  canActivate(): boolean {
    const now = Date.now();
    if (now - this._windowStart >= WINDOW_MS) {
      this._windowStart = now;
      this._count = 0;
    }
    if (this._count >= this._limit) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((this._windowStart + WINDOW_MS - now) / 1000),
      );
      throw new TooManyRequestsError(
        'Too many AI requests. Try again later.',
        retryAfterSeconds,
      );
    }

    this._count++;
    return true;
  }
}
