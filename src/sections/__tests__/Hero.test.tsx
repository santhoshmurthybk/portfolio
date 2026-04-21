import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock modules before imports
vi.mock('../../data/profile.json', () => ({
  default: {
    name: 'Test User',
    title: 'Software Engineer',
    greeting: 'Hello',
    bio: 'Test bio text',
    profileImageUrl: '/test-image.jpg',
    cvUrl: '/test-cv.pdf',
    typewriterPhrases: ['Developer', 'Engineer'],
  },
}));

vi.mock('../Hero/TypewriterText', () => ({
  TypewriterText: ({ phrases }: { phrases: string[] }) => (
    <span data-testid="typewriter">{phrases[0]}</span>
  ),
}));

import { Hero } from '../Hero/Hero';

describe('Hero', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the hero section', () => {
    render(<Hero />);
    
    const section = document.querySelector('#home');
    expect(section).toBeInTheDocument();
  });

  it('should display the profile name', () => {
    render(<Hero />);
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test User');
  });

  it('should display the title', () => {
    render(<Hero />);
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Software Engineer');
  });

  it('should display the greeting', () => {
    render(<Hero />);
    
    expect(screen.getByText(/Hello/)).toBeInTheDocument();
  });

  it('should display the bio', () => {
    render(<Hero />);
    
    expect(screen.getByText('Test bio text')).toBeInTheDocument();
  });

  it('should render profile image with correct alt text', () => {
    render(<Hero />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('alt', 'Test User profile');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });

  it('should render download CV button', () => {
    render(<Hero />);
    
    const downloadLink = screen.getByRole('link', { name: /Download CV/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', '/test-cv.pdf');
    expect(downloadLink).toHaveAttribute('download');
  });

  it('should render Learn More button', () => {
    render(<Hero />);
    
    const learnMoreLink = screen.getByRole('link', { name: /Learn More/i });
    expect(learnMoreLink).toBeInTheDocument();
    expect(learnMoreLink).toHaveAttribute('href', '#about');
  });

  it('should render typewriter component with phrases', () => {
    render(<Hero />);
    
    expect(screen.getByTestId('typewriter')).toBeInTheDocument();
  });

  it('should have proper section styling', () => {
    render(<Hero />);
    
    const section = document.querySelector('#home');
    expect(section).toHaveClass('min-h-screen');
    expect(section).toHaveClass('flex');
    expect(section).toHaveClass('items-center');
    expect(section).toHaveClass('justify-center');
  });
});
