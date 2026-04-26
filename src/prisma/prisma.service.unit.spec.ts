import { afterEach, describe, expect, it, vi } from 'vitest';
import { PrismaService } from './prisma.service';

const prismaMocks = vi.hoisted(() => {
  const connect = vi.fn();
  const disconnect = vi.fn();

  return {
    connect,
    disconnect,
    PrismaPg: vi.fn(),
    PrismaClient: vi.fn(function () {
      this.$connect = connect;
      this.$disconnect = disconnect;
    }),
  };
});

vi.mock('@prisma/adapter-pg', () => ({
  PrismaPg: prismaMocks.PrismaPg,
}));

vi.mock('../../generated/prisma/client', () => ({
  PrismaClient: prismaMocks.PrismaClient,
}));

describe('PrismaService', () => {
  const originalDatabaseUrl = process.env.DATABASE_URL;

  afterEach(() => {
    process.env.DATABASE_URL = originalDatabaseUrl;
    vi.clearAllMocks();
  });

  it('throws when DATABASE_URL is missing', () => {
    delete process.env.DATABASE_URL;

    expect(() => new PrismaService()).toThrow('DATABASE_URL is not defined');
  });

  it('creates Prisma adapter with DATABASE_URL', () => {
    process.env.DATABASE_URL = 'postgresql://test';

    new PrismaService();

    expect(prismaMocks.PrismaPg).toHaveBeenCalledWith({
      connectionString: 'postgresql://test',
    });
  });

  it('connects and disconnects on module lifecycle', async () => {
    process.env.DATABASE_URL = 'postgresql://test';
    const service = new PrismaService();

    await service.onModuleInit();
    await service.onModuleDestroy();

    expect(prismaMocks.connect).toHaveBeenCalledTimes(1);
    expect(prismaMocks.disconnect).toHaveBeenCalledTimes(1);
  });
});
