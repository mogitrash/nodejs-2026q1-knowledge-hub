import { describe, expect, it } from 'vitest';
import { IS_PUBLIC_KEY, Public } from './public.decorator';

describe('Public decorator', () => {
  it('creates public metadata decorator', () => {
    expect(IS_PUBLIC_KEY).toBe('isPublic');
    expect(Public()).toBeTypeOf('function');
  });
});
