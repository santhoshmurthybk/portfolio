import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../data/certifications.json', () => ({
  default: [
    {
      id: '1',
      name: 'AWS Developer',
      issuer: 'Amazon',
      credentialUrl: 'https://aws.amazon.com/cert',
      logo: 'aws',
    },
    {
      id: '2',
      name: 'Microsoft Certified',
      issuer: 'Microsoft',
      credentialUrl: 'https://microsoft.com/cert',
      logo: 'microsoft',
    },
    {
      id: '3',
      name: 'Design Thinking',
      issuer: 'IBM',
      credentialUrl: 'https://ibm.com/cert',
      logo: 'ibm',
    },
    {
      id: '4',
      name: 'Unknown Cert',
      issuer: 'Unknown',
      credentialUrl: 'https://unknown.com/cert',
      logo: 'unknown',
    },
  ],
}));

vi.mock('./SkillsTab', () => ({
  SkillsTab: () => <div data-testid="skills-tab">Skills Tab</div>,
}));

vi.mock('./ExperienceTab', () => ({
  ExperienceTab: () => <div data-testid="experience-tab">Experience Tab</div>,
}));

vi.mock('./EducationTab', () => ({
  EducationTab: () => <div data-testid="education-tab">Education Tab</div>,
}));

vi.mock('../../components/AnimatedBackground', () => ({
  AnimatedBackground: () => <div data-testid="animated-background" />,
}));

import { About } from '../About';

describe('About', () => {
  it('should render About Me heading', () => {
    render(<About />);
    expect(screen.getByText('About Me')).toBeInTheDocument();
  });

  it('should render Skills section', () => {
    render(<About />);
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByTestId('skills-tab')).toBeInTheDocument();
  });

  it('should render Experience section', () => {
    render(<About />);
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByTestId('experience-tab')).toBeInTheDocument();
  });

  it('should render Education section', () => {
    render(<About />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByTestId('education-tab')).toBeInTheDocument();
  });

  it('should render Certifications section', () => {
    render(<About />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
  });

  it('should render certification cards', () => {
    render(<About />);
    expect(screen.getByText('AWS Developer')).toBeInTheDocument();
    expect(screen.getByText('Microsoft Certified')).toBeInTheDocument();
    expect(screen.getByText('Design Thinking')).toBeInTheDocument();
  });

  it('should render certification links', () => {
    render(<About />);
    const awsLink = screen.getByText('AWS Developer').closest('a');
    expect(awsLink).toHaveAttribute('href', 'https://aws.amazon.com/cert');
    expect(awsLink).toHaveAttribute('target', '_blank');
  });

  it('should render AnimatedBackground', () => {
    render(<About />);
    expect(screen.getByTestId('animated-background')).toBeInTheDocument();
  });

  it('should have proper section id', () => {
    const { container } = render(<About />);
    expect(container.querySelector('#about')).toBeInTheDocument();
  });
});
