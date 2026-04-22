import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../hooks/useTypewriter', () => ({
  useTypewriter: () => ({
    text: 'Hello World',
    isTyping: true,
  }),
}));

import { TypewriterText } from './TypewriterText';

describe('TypewriterText', () => {
  it('should render current text', () => {
    render(<TypewriterText phrases={['Hello', 'World']} />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(
      <TypewriterText phrases={['Test']} className="custom-class" />
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should render cursor', () => {
    const { container } = render(<TypewriterText phrases={['Test']} />);
    const cursor = container.querySelector('[aria-hidden="true"]');
    expect(cursor).toBeInTheDocument();
    expect(cursor).toHaveClass('w-0.5', 'h-6');
  });

  it('should animate cursor when typing', () => {
    const { container } = render(<TypewriterText phrases={['Test']} />);
    const cursor = container.querySelector('[aria-hidden="true"]');
    expect(cursor).toHaveClass('animate-pulse');
  });
});
