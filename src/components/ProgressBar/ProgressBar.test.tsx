import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProgressBar } from '../ProgressBar';

describe('ProgressBar', () => {
  it('should render with label', () => {
    render(<ProgressBar label="JavaScript" percentage={85} />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
  });

  it('should render with percentage', () => {
    render(<ProgressBar label="TypeScript" percentage={90} />);
    expect(screen.getByText('90%')).toBeInTheDocument();
  });

  it('should have progressbar role with correct attributes', () => {
    render(<ProgressBar label="React" percentage={95} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveAttribute('aria-valuenow', '95');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
    expect(progressbar).toHaveAttribute('aria-label', 'React: 95%');
  });

  it('should clamp percentage to 100 max', () => {
    render(<ProgressBar label="Over" percentage={150} />);
    expect(screen.getByText('100%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '100');
  });

  it('should clamp percentage to 0 min', () => {
    render(<ProgressBar label="Under" percentage={-10} />);
    expect(screen.getByText('0%')).toBeInTheDocument();
    expect(screen.getByRole('progressbar')).toHaveAttribute('aria-valuenow', '0');
  });

  it('should apply custom className', () => {
    const { container } = render(<ProgressBar label="Test" percentage={50} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should set correct width style', () => {
    render(<ProgressBar label="Test" percentage={75} />);
    const progressbar = screen.getByRole('progressbar');
    expect(progressbar).toHaveStyle({ width: '75%' });
  });
});
