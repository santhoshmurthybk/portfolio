import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Timeline } from '../Timeline';

const mockItems = [
  {
    id: '1',
    startDate: 'Jan, 2023',
    endDate: 'Dec, 2023',
    title: 'Software Engineer',
    subtitle: 'Tech Company',
    location: 'Remote',
    description: 'Developed web applications',
  },
  {
    id: '2',
    startDate: 'Jun, 2022',
    endDate: null,
    title: 'Senior Developer',
    subtitle: 'Another Company',
    location: 'New York',
  },
];

describe('Timeline', () => {
  it('should render timeline items', () => {
    render(<Timeline items={mockItems} />);
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
  });

  it('should display company names', () => {
    render(<Timeline items={mockItems} />);
    expect(screen.getByText(/Tech Company/)).toBeInTheDocument();
    expect(screen.getByText(/Another Company/)).toBeInTheDocument();
  });

  it('should display date range for completed items', () => {
    render(<Timeline items={mockItems} />);
    expect(screen.getByText('Jan, 2023 - Dec, 2023')).toBeInTheDocument();
  });

  it('should display Present for ongoing items', () => {
    render(<Timeline items={mockItems} />);
    expect(screen.getByText('Jun, 2022 - Present')).toBeInTheDocument();
  });

  it('should display location', () => {
    render(<Timeline items={mockItems} />);
    expect(screen.getByText(/Remote/)).toBeInTheDocument();
    expect(screen.getByText(/New York/)).toBeInTheDocument();
  });

  it('should display description when provided', () => {
    render(<Timeline items={mockItems} />);
    expect(screen.getByText('Developed web applications')).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = render(<Timeline items={mockItems} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should render empty when no items', () => {
    const { container } = render(<Timeline items={[]} />);
    expect(container.querySelector('.space-y-8')?.children).toHaveLength(0);
  });

  it('should handle items without location', () => {
    const itemsWithoutLocation = [
      {
        id: '1',
        startDate: 'Jan, 2023',
        endDate: 'Dec, 2023',
        title: 'Developer',
        subtitle: 'Company',
      },
    ];
    render(<Timeline items={itemsWithoutLocation} />);
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });
});
