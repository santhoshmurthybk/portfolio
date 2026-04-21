import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

type Theme = 'light' | 'dark';

// Mock useTheme hook before importing ThemeToggle
const mockToggleTheme = vi.fn();
const mockUseTheme = vi.fn<[], { isDark: boolean; toggleTheme: () => void; theme: Theme }>(() => ({
  isDark: false,
  toggleTheme: mockToggleTheme,
  theme: 'light',
}));

vi.mock('../../hooks/useTheme', () => ({
  useTheme: () => mockUseTheme(),
}));

import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockUseTheme.mockReturnValue({
      isDark: false,
      toggleTheme: mockToggleTheme,
      theme: 'light',
    });
  });

  it('should render a button', () => {
    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('should have correct aria-label in light mode', () => {
    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
  });

  it('should have correct aria-label in dark mode', () => {
    mockUseTheme.mockReturnValue({
      isDark: true,
      toggleTheme: mockToggleTheme,
      theme: 'dark',
    });

    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');
  });

  it('should call toggleTheme when clicked', () => {
    render(<ThemeToggle />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });

  it('should apply custom className', () => {
    render(<ThemeToggle className="custom-class" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('should render icon with aria-hidden', () => {
    render(<ThemeToggle />);
    
    const icon = document.querySelector('[aria-hidden="true"]');
    expect(icon).toBeInTheDocument();
  });
});
