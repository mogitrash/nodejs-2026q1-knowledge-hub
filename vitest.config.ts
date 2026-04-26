import { resolve } from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    alias: {
      generated: resolve(__dirname, 'generated'),
      src: resolve(__dirname, 'src'),
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.unit.spec.ts'],
    clearMocks: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      exclude: ['generated/**'],
      thresholds: {
        lines: 90,
        branches: 85,
      },
    },
  },
});
