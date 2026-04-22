import { render, screen, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';

vi.mock('./hooks/useScrollSpy', () => ({
  useScrollSpy: () => 'home',
}));

vi.mock('./hooks/useTheme', () => ({
  useTheme: vi.fn(),
}));

vi.mock('@components/Preloader', () => ({
  Preloader: () => <div data-testid="preloader">Preloader</div>,
}));

vi.mock('./layout/Header', () => ({
  Header: ({ activeSection }: { activeSection: string }) => (
    <header data-testid="header" data-active={activeSection}>
      Header
    </header>
  ),
}));

vi.mock('./layout/Footer', () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}));

vi.mock('./sections/Hero', () => ({
  Hero: () => <section data-testid="hero">Hero</section>,
}));

vi.mock('./sections/About', () => ({
  About: () => <section data-testid="about">About</section>,
}));

vi.mock('./sections/Portfolio', () => ({
  Portfolio: () => <section data-testid="portfolio">Portfolio</section>,
}));

vi.mock('./sections/Contact', () => ({
  Contact: () => <section data-testid="contact">Contact</section>,
}));

import { App } from './App';

describe('App', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    // Reset hash
    window.location.hash = '';
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('should render Preloader', () => {
    render(<App />);
    expect(screen.getByTestId('preloader')).toBeInTheDocument();
  });

  it('should render Header with active section', () => {
    render(<App />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toHaveAttribute('data-active', 'home');
  });

  it('should render Hero section', () => {
    render(<App />);
    expect(screen.getByTestId('hero')).toBeInTheDocument();
  });

  it('should render About section', () => {
    render(<App />);
    expect(screen.getByTestId('about')).toBeInTheDocument();
  });

  it('should render Portfolio section', () => {
    render(<App />);
    expect(screen.getByTestId('portfolio')).toBeInTheDocument();
  });

  it('should render Contact section', () => {
    render(<App />);
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });

  it('should render Footer', () => {
    render(<App />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('should render main content area', () => {
    render(<App />);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main-content');
  });

  it('should scroll to section on hash navigation', () => {
    const mockScrollIntoView = vi.fn();
    const mockElement = document.createElement('div');
    mockElement.id = 'about';
    mockElement.scrollIntoView = mockScrollIntoView;
    document.body.appendChild(mockElement);

    window.location.hash = '#about';

    render(<App />);

    act(() => {
      vi.advanceTimersByTime(150);
    });

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(mockElement);
  });

  it('should not scroll when hash target does not exist', () => {
    window.location.hash = '#nonexistent';

    render(<App />);

    act(() => {
      vi.advanceTimersByTime(150);
    });

    // Test passes if no error occurs
  });
});
