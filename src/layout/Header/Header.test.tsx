import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

vi.mock('../../utils/scrollTo', () => ({
  createScrollHandler: (_id: string) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
  },
}));

vi.mock('../../components/ThemeToggle', () => ({
  ThemeToggle: () => <button aria-label="Toggle theme">Toggle Theme</button>,
}));

import { Header } from '../Header';

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe('Header', () => {
  it('should render header', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('should render navigation', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should render name/logo', () => {
    render(<Header />);
    expect(screen.getByText('Santhosh Murthy BK')).toBeInTheDocument();
  });

  it('should render all nav items', () => {
    render(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should highlight active section', () => {
    render(<Header activeSection="about" />);
    const aboutLinks = screen.getAllByText('About');
    expect(aboutLinks[0]).toHaveClass('text-primary-600');
  });

  it('should render skip to content link', () => {
    render(<Header />);
    expect(screen.getByText('Skip to main content')).toBeInTheDocument();
  });

  it('should render theme toggle', () => {
    render(<Header />);
    const toggles = screen.getAllByLabelText(/Toggle theme/);
    expect(toggles.length).toBeGreaterThan(0);
  });

  it('should toggle mobile menu on button click', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Open menu');
    
    fireEvent.click(menuButton);
    
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
  });

  it('should close mobile menu after nav click', () => {
    render(<Header />);
    const menuButton = screen.getByLabelText('Open menu');
    
    fireEvent.click(menuButton);
    
    // Mobile menu should be open
    const mobileNavContainer = document.querySelector('.md\\:hidden.pb-4');
    expect(mobileNavContainer).toBeInTheDocument();

    // Click on a nav item in mobile menu
    const mobileAboutLink = mobileNavContainer?.querySelector('a[href="#about"]');
    if (mobileAboutLink) {
      fireEvent.click(mobileAboutLink);
    }

    // Menu button should show "Open menu" again
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
});
