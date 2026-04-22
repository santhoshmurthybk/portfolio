import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('APP_CONFIG', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('should use default values when env variables not set', async () => {
    const { APP_CONFIG } = await import('../env');
    expect(APP_CONFIG.title).toBeDefined();
    expect(APP_CONFIG.version).toBeDefined();
    expect(typeof APP_CONFIG.isDev).toBe('boolean');
    expect(typeof APP_CONFIG.isProd).toBe('boolean');
    expect(APP_CONFIG.mode).toBeDefined();
  });

  it('should have title property', async () => {
    const { APP_CONFIG } = await import('../env');
    expect(typeof APP_CONFIG.title).toBe('string');
  });

  it('should have version property', async () => {
    const { APP_CONFIG } = await import('../env');
    expect(typeof APP_CONFIG.version).toBe('string');
  });
});
