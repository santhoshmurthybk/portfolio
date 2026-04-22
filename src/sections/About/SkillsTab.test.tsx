import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../data/skills.json', () => ({
  default: [
    { id: '1', name: 'React', proficiency: 90 },
    { id: '2', name: 'TypeScript', proficiency: 85 },
  ],
}));

import { SkillsTab } from './SkillsTab';

describe('SkillsTab', () => {
  it('should render skills', () => {
    render(<SkillsTab />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('should display proficiency percentages', () => {
    render(<SkillsTab />);
    expect(screen.getByText('90%')).toBeInTheDocument();
    expect(screen.getByText('85%')).toBeInTheDocument();
  });
});
