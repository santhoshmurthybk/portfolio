import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { useTypewriter } from '../useTypewriter';

describe('useTypewriter', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should start with empty text', () => {
    const { result } = renderHook(() =>
      useTypewriter({
        phrases: ['Hello', 'World'],
        typingSpeed: 100,
      })
    );

    expect(result.current.text).toBe('');
    expect(result.current.phraseIndex).toBe(0);
  });

  it('should type characters one by one', () => {
    const { result } = renderHook(() =>
      useTypewriter({
        phrases: ['Hi'],
        typingSpeed: 100,
      })
    );

    expect(result.current.text).toBe('');

    // Type 'H'
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current.text).toBe('H');

    // Type 'i'
    act(() => {
      vi.advanceTimersByTime(100);
    });
    expect(result.current.text).toBe('Hi');
  });

  it('should use custom typing speed', () => {
    const { result } = renderHook(() =>
      useTypewriter({
        phrases: ['AB'],
        typingSpeed: 50,
      })
    );

    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(result.current.text).toBe('A');

    act(() => {
      vi.advanceTimersByTime(50);
    });
    expect(result.current.text).toBe('AB');
  });

  it('should handle empty phrases array', () => {
    const { result } = renderHook(() =>
      useTypewriter({
        phrases: [],
        typingSpeed: 100,
      })
    );

    expect(result.current.text).toBe('');
    expect(result.current.phraseIndex).toBe(0);
  });

  it('should return isTyping state', () => {
    const { result } = renderHook(() =>
      useTypewriter({
        phrases: ['Test'],
        typingSpeed: 100,
      })
    );

    expect(result.current.isTyping).toBe(true);
  });

  it('should return current phraseIndex', () => {
    const { result } = renderHook(() =>
      useTypewriter({
        phrases: ['A', 'B', 'C'],
        typingSpeed: 100,
      })
    );

    expect(result.current.phraseIndex).toBe(0);
  });
});
