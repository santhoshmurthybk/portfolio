import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../data/experience.json', () => ({
  default: [
    {
      id: '1',
      company: 'Tech Corp',
      title: 'Senior Developer',
      startDate: 'Jan, 2022',
      endDate: null,
      location: 'Remote',
      description: 'Building amazing apps',
    },
    {
      id: '2',
      company: 'Startup Inc',
      title: 'Developer',
      startDate: 'Jan, 2020',
      endDate: 'Dec, 2021',
      location: 'New York',
      description: 'Developed features',
    },
  ],
}));

import { ExperienceTab } from './ExperienceTab';

describe('ExperienceTab', () => {
  it('should render experience entries', () => {
    render(<ExperienceTab />);
    expect(screen.getByText('Senior Developer')).toBeInTheDocument();
    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('should display company names', () => {
    render(<ExperienceTab />);
    expect(screen.getByText(/Tech Corp/)).toBeInTheDocument();
    expect(screen.getByText(/Startup Inc/)).toBeInTheDocument();
  });

  it('should display Present for ongoing positions', () => {
    render(<ExperienceTab />);
    expect(screen.getByText('Jan, 2022 - Present')).toBeInTheDocument();
  });
});
