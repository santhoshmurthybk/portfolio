import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../data/education.json', () => ({
  default: [
    {
      id: '1',
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      startDate: '2016',
      endDate: '2020',
      location: 'Boston',
    },
  ],
}));

import { EducationTab } from './EducationTab';

describe('EducationTab', () => {
  it('should render education entries', () => {
    render(<EducationTab />);
    expect(screen.getByText('Bachelor of Science')).toBeInTheDocument();
  });

  it('should display institution and field', () => {
    render(<EducationTab />);
    expect(screen.getByText(/University of Technology/)).toBeInTheDocument();
    expect(screen.getByText(/Computer Science/)).toBeInTheDocument();
  });

  it('should display date range', () => {
    render(<EducationTab />);
    expect(screen.getByText('2016 - 2020')).toBeInTheDocument();
  });

  it('should display location', () => {
    render(<EducationTab />);
    expect(screen.getByText(/Boston/)).toBeInTheDocument();
  });
});
