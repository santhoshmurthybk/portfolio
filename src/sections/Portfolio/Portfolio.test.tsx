import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('../../data/projects.json', () => ({
  default: [
    {
      id: '1',
      title: 'Project One',
      description: 'Description for project one',
      imageUrl: '/assets/images/projects/project1.png',
      projectUrl: 'https://project1.com',
      githubUrl: 'https://github.com/user/project1',
      technologies: ['React', 'TypeScript'],
    },
    {
      id: '2',
      title: 'Project Two',
      description: 'Description for project two',
      imageUrl: '/assets/images/projects/project2.png',
      projectUrl: 'https://project2.com',
      githubUrl: 'https://github.com/user/project2',
      technologies: ['Vue', 'JavaScript'],
    },
  ],
}));

vi.mock('../../components/AnimatedBackground', () => ({
  AnimatedBackground: () => <div data-testid="animated-background" />,
}));

vi.mock('./ProjectCard', () => ({
  ProjectCard: ({ project }: { project: { title: string; id: string } }) => (
    <div data-testid={`project-card-${project.id}`}>{project.title}</div>
  ),
}));

import { Portfolio } from '../Portfolio';

describe('Portfolio', () => {
  it('should render My Portfolio heading', () => {
    render(<Portfolio />);
    expect(screen.getByText('My Portfolio')).toBeInTheDocument();
  });

  it('should render description text', () => {
    render(<Portfolio />);
    expect(screen.getByText(/Here are some of my recent projects/)).toBeInTheDocument();
  });

  it('should render project cards', () => {
    render(<Portfolio />);
    expect(screen.getByTestId('project-card-1')).toBeInTheDocument();
    expect(screen.getByTestId('project-card-2')).toBeInTheDocument();
  });

  it('should render AnimatedBackground', () => {
    render(<Portfolio />);
    expect(screen.getByTestId('animated-background')).toBeInTheDocument();
  });

  it('should have proper section id', () => {
    const { container } = render(<Portfolio />);
    expect(container.querySelector('#portfolio')).toBeInTheDocument();
  });
});
