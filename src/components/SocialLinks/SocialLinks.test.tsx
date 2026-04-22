import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../data/socialLinks.json', () => ({
  default: [
    { id: 'github', platform: 'GitHub', url: 'https://github.com/test', icon: 'BiLogoGithub' },
    { id: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com/in/test', icon: 'BiLogoLinkedin' },
    { id: 'unknown', platform: 'Unknown', url: 'https://unknown.com', icon: 'UnknownIcon' },
  ],
}));

import { SocialLinks } from '../SocialLinks';

describe('SocialLinks', () => {
  it('should render social links', () => {
    render(<SocialLinks />);
    expect(screen.getByLabelText('Visit GitHub')).toBeInTheDocument();
    expect(screen.getByLabelText('Visit LinkedIn')).toBeInTheDocument();
  });

  it('should have correct href for links', () => {
    render(<SocialLinks />);
    expect(screen.getByLabelText('Visit GitHub')).toHaveAttribute('href', 'https://github.com/test');
    expect(screen.getByLabelText('Visit LinkedIn')).toHaveAttribute('href', 'https://linkedin.com/in/test');
  });

  it('should open links in new tab', () => {
    render(<SocialLinks />);
    const link = screen.getByLabelText('Visit GitHub');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should apply custom className', () => {
    const { container } = render(<SocialLinks className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom iconSize', () => {
    render(<SocialLinks iconSize="w-8 h-8" />);
    const link = screen.getByLabelText('Visit GitHub');
    const icon = link.querySelector('svg');
    expect(icon).toHaveClass('w-8');
    expect(icon).toHaveClass('h-8');
  });

  it('should not render links with unknown icons', () => {
    render(<SocialLinks />);
    expect(screen.queryByLabelText('Visit Unknown')).not.toBeInTheDocument();
  });
});
