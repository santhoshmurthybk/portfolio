import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AnimatedBackground } from './AnimatedBackground';

describe('AnimatedBackground', () => {
  it('should render without crashing', () => {
    const { container } = render(<AnimatedBackground />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('should render with primary variant by default', () => {
    const { container } = render(<AnimatedBackground />);
    const blobs = container.querySelectorAll('.animate-blob');
    expect(blobs.length).toBe(3);
    expect(blobs[0]).toHaveClass('bg-primary-300/30');
  });

  it('should render with purple variant', () => {
    const { container } = render(<AnimatedBackground variant="purple" />);
    const blobs = container.querySelectorAll('.animate-blob');
    expect(blobs[0]).toHaveClass('bg-purple-300/30');
  });

  it('should render with cyan variant', () => {
    const { container } = render(<AnimatedBackground variant="cyan" />);
    const blobs = container.querySelectorAll('.animate-blob');
    expect(blobs[0]).toHaveClass('bg-cyan-300/30');
  });

  it('should render blurred blobs', () => {
    const { container } = render(<AnimatedBackground />);
    const blobs = container.querySelectorAll('.blur-3xl');
    expect(blobs.length).toBe(3);
  });

  it('should have pointer-events-none on blobs container', () => {
    const { container } = render(<AnimatedBackground />);
    const blobsContainer = container.querySelector('.pointer-events-none');
    expect(blobsContainer).toBeInTheDocument();
  });
});
