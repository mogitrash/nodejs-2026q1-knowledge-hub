import { Injectable } from '@nestjs/common';

export type AiEndpointKey = 'summarize' | 'translate' | 'analyze' | 'generate';

export interface AiUsageCounters {
  requests: number;
  tokens?: number;
}

@Injectable()
export class AiUsageService {
  readonly byEndpoint = new Map<
    AiEndpointKey,
    { requests: number; tokens: number }
  >([
    ['summarize', { requests: 0, tokens: 0 }],
    ['translate', { requests: 0, tokens: 0 }],
    ['analyze', { requests: 0, tokens: 0 }],
    ['generate', { requests: 0, tokens: 0 }],
  ]);

  bumpRequest(endpoint: AiEndpointKey): void {
    this.byEndpoint.get(endpoint)!.requests++;
  }

  bumpTokens(endpoint: AiEndpointKey, totalTokens?: number): void {
    if (typeof totalTokens === 'number' && Number.isFinite(totalTokens)) {
      this.byEndpoint.get(endpoint)!.tokens += totalTokens;
    }
  }

  snapshot(): {
    totals: AiUsageCounters;
    byEndpoint: Record<AiEndpointKey, AiUsageCounters>;
  } {
    let requests = 0;
    let tokens = 0;
    const byEndpoint = {} as Record<AiEndpointKey, AiUsageCounters>;
    for (const [key, v] of this.byEndpoint) {
      requests += v.requests;
      tokens += v.tokens;
      byEndpoint[key] = { requests: v.requests, tokens: v.tokens };
    }
    return { totals: { requests, tokens }, byEndpoint };
  }
}
