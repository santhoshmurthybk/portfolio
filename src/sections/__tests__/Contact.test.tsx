import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock modules before imports
vi.mock('../../data/contact.json', () => ({
  default: [
    { id: 'email', type: 'email', value: 'test@example.com', label: 'Email' },
    { id: 'phone', type: 'phone', value: '+1234567890', label: 'Phone' },
    { id: 'location', type: 'location', value: 'Test City', label: 'Location' },
  ],
}));

vi.mock('../Contact/ContactCard', () => ({
  ContactCard: ({ contact }: { contact: { id: string; label: string } }) => (
    <div data-testid={`contact-card-${contact.id}`}>{contact.label}</div>
  ),
}));

vi.mock('../../components/SocialLinks', () => ({
  SocialLinks: ({ className }: { className?: string }) => (
    <div data-testid="social-links" className={className}>
      Social Links
    </div>
  ),
}));

import { Contact } from '../Contact/Contact';

describe('Contact', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the contact section', () => {
    render(<Contact />);
    
    const section = document.querySelector('#contact');
    expect(section).toBeInTheDocument();
  });

  it('should display section heading', () => {
    render(<Contact />);
    
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Get In Touch');
  });

  it('should display section description', () => {
    render(<Contact />);
    
    expect(screen.getByText(/Feel free to reach out/i)).toBeInTheDocument();
  });

  it('should render all contact cards', () => {
    render(<Contact />);
    
    expect(screen.getByTestId('contact-card-email')).toBeInTheDocument();
    expect(screen.getByTestId('contact-card-phone')).toBeInTheDocument();
    expect(screen.getByTestId('contact-card-location')).toBeInTheDocument();
  });

  it('should display connect heading', () => {
    render(<Contact />);
    
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Connect with me');
  });

  it('should render social links component', () => {
    render(<Contact />);
    
    expect(screen.getByTestId('social-links')).toBeInTheDocument();
  });

  it('should have centered social links', () => {
    render(<Contact />);
    
    const socialLinks = screen.getByTestId('social-links');
    expect(socialLinks).toHaveClass('justify-center');
  });

  it('should have proper section styling', () => {
    render(<Contact />);
    
    const section = document.querySelector('#contact');
    expect(section).toHaveClass('min-h-screen');
    expect(section).toHaveClass('py-20');
  });
});
