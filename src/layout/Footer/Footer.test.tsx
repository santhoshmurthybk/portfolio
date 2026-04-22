import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Footer } from '../Footer';

describe('Footer', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 0, 1));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render footer', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should display current year', () => {
    render(<Footer />);
    expect(screen.getByText(/2026/)).toBeInTheDocument();
  });

  it('should display copyright text', () => {
    render(<Footer />);
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument();
  });

  it('should display built with text', () => {
    render(<Footer />);
    expect(screen.getByText(/Built with React, TypeScript, and Tailwind CSS/)).toBeInTheDocument();
  });

  it('should display SpecKit attribution', () => {
    render(<Footer />);
    expect(screen.getByText('SpecKit')).toBeInTheDocument();
  });

  it('should display GitHub Copilot attribution', () => {
    render(<Footer />);
    expect(screen.getByText(/GitHub Copilot/)).toBeInTheDocument();
  });

  it('should have GitHub source link', () => {
    render(<Footer />);
    const link = screen.getByLabelText('View source on GitHub');
    expect(link).toHaveAttribute('href', 'https://github.com/santhoshmurthybk/portfolio/');
    expect(link).toHaveAttribute('target', '_blank');
  });
});
