import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest';
import { Preloader } from '../Preloader';

describe('Preloader', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render preloader initially', () => {
    render(<Preloader />);
    
    const preloader = screen.getByRole('status');
    expect(preloader).toBeInTheDocument();
    expect(preloader).toHaveAttribute('aria-label', 'Loading');
  });

  it('should display three bouncing dots', () => {
    render(<Preloader />);
    
    const dots = document.querySelectorAll('.animate-bounce-dot');
    expect(dots).toHaveLength(3);
  });

  it('should have sr-only loading text', () => {
    render(<Preloader />);
    
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
    expect(loadingText).toHaveClass('sr-only');
  });

  it('should fade out after minDuration when document is loaded', () => {
    // Mock document ready state
    Object.defineProperty(document, 'readyState', {
      value: 'complete',
      writable: true,
    });

    render(<Preloader minDuration={500} />);
    
    // Initially visible
    expect(screen.getByRole('status')).toBeInTheDocument();

    // Advance past minDuration
    act(() => {
      vi.advanceTimersByTime(500);
    });

    // Should start fading
    const preloader = screen.getByRole('status');
    expect(preloader).toHaveClass('opacity-0');
  });

  it('should use custom minDuration', () => {
    Object.defineProperty(document, 'readyState', {
      value: 'complete',
      writable: true,
    });

    render(<Preloader minDuration={1000} />);
    
    // Advance 500ms - should still be visible
    act(() => {
      vi.advanceTimersByTime(500);
    });

    const preloader = screen.getByRole('status');
    expect(preloader).not.toHaveClass('opacity-0');

    // Advance to 1000ms - should start fading
    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(screen.getByRole('status')).toHaveClass('opacity-0');
  });

  it('should render dots with different animation delays', () => {
    render(<Preloader />);
    
    const dots = document.querySelectorAll('.animate-bounce-dot');
    
    expect(dots[0]).toHaveStyle({ animationDelay: '0ms' });
    expect(dots[1]).toHaveStyle({ animationDelay: '160ms' });
    expect(dots[2]).toHaveStyle({ animationDelay: '320ms' });
  });

  it('should have proper z-index to overlay content', () => {
    render(<Preloader />);
    
    const preloader = screen.getByRole('status');
    expect(preloader).toHaveClass('z-50');
  });

  it('should position preloader in center of screen', () => {
    render(<Preloader />);
    
    const preloader = screen.getByRole('status');
    expect(preloader).toHaveClass('fixed');
    expect(preloader).toHaveClass('inset-0');
    expect(preloader).toHaveClass('flex');
    expect(preloader).toHaveClass('items-center');
    expect(preloader).toHaveClass('justify-center');
  });
});
