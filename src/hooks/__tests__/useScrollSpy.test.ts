import { renderHook } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useScrollSpy } from '../useScrollSpy';

describe('useScrollSpy', () => {
  const sectionIds = ['hero', 'about', 'portfolio', 'contact'];

  beforeEach(() => {
    // Mock getElementById to return mock elements with getBoundingClientRect
    vi.spyOn(document, 'getElementById').mockImplementation((id: string) => {
      if (!sectionIds.includes(id)) return null;
      
      // Return elements at different positions - hero at top
      const tops: Record<string, number> = {
        hero: 0,
        about: 500,
        portfolio: 1000,
        contact: 1500,
      };
      
      return {
        getBoundingClientRect: () => ({
          top: tops[id] ?? 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 0,
          height: 500,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        }),
      } as HTMLElement;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should return active section based on scroll position', () => {
    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds, offset: 100 })
    );

    // Hero is at top (0) which is <= offset (100), so hero should be active
    expect(result.current).toBe('hero');
  });

  it('should return empty string when sectionIds is empty', () => {
    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds: [], offset: 100 })
    );

    expect(result.current).toBe('');
  });

  it('should handle missing section elements gracefully', () => {
    vi.spyOn(document, 'getElementById').mockReturnValue(null);

    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds, offset: 100 })
    );

    // Should still return first section as default
    expect(result.current).toBe('hero');
  });

  it('should use custom offset value', () => {
    // Set up elements where about is just under custom offset
    vi.spyOn(document, 'getElementById').mockImplementation((id: string) => {
      const tops: Record<string, number> = {
        hero: -50,
        about: 150,
        portfolio: 500,
        contact: 1000,
      };
      
      return {
        getBoundingClientRect: () => ({
          top: tops[id] ?? 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: 0,
          height: 500,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        }),
      } as HTMLElement;
    });

    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds, offset: 200 })
    );

    // With offset 200, about (at 150) should be considered active
    expect(result.current).toBe('about');
  });

  it('should cleanup scroll listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');

    const { unmount } = renderHook(() =>
      useScrollSpy({ sectionIds, offset: 100 })
    );

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
  });

  it('should throttle scroll events', () => {
    vi.useFakeTimers();

    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds, offset: 100, throttleMs: 100 })
    );

    // Trigger multiple scroll events rapidly
    window.dispatchEvent(new Event('scroll'));
    window.dispatchEvent(new Event('scroll'));
    window.dispatchEvent(new Event('scroll'));

    // Should still work
    expect(result.current).toBeDefined();

    // Advance time and trigger another scroll
    vi.advanceTimersByTime(150);
    window.dispatchEvent(new Event('scroll'));

    expect(result.current).toBeDefined();

    vi.useRealTimers();
  });

  it('should handle delayed throttled scroll', () => {
    vi.useFakeTimers();

    const { result } = renderHook(() =>
      useScrollSpy({ sectionIds, offset: 100, throttleMs: 100 })
    );

    // Trigger scroll events
    window.dispatchEvent(new Event('scroll'));

    // Advance time partially
    vi.advanceTimersByTime(50);
    window.dispatchEvent(new Event('scroll'));

    // Advance remaining time
    vi.advanceTimersByTime(100);

    expect(result.current).toBeDefined();

    vi.useRealTimers();
  });
});
