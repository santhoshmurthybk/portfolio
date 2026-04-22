import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { getAssetPath } from '../assets';

describe('getAssetPath', () => {
  const originalEnv = import.meta.env;

  beforeEach(() => {
    // Reset import.meta.env.BASE_URL before each test
    vi.stubGlobal('import.meta', {
      env: {
        BASE_URL: '/',
      },
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('should return path with base URL', () => {
    const result = getAssetPath('/assets/image.png');
    expect(result).toBe('/assets/image.png');
  });

  it('should remove leading slash to avoid double slashes', () => {
    const result = getAssetPath('/test/path.jpg');
    expect(result).toContain('test/path.jpg');
  });

  it('should handle paths without leading slash', () => {
    const result = getAssetPath('assets/resume.pdf');
    expect(result).toContain('assets/resume.pdf');
  });
});
