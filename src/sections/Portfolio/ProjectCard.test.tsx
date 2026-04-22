import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { ProjectCard } from './ProjectCard';

vi.mock('../../utils/assets', () => ({
  getAssetPath: (path: string) => `/base${path}`,
}));

const mockProject = {
  id: '1',
  title: 'Test Project',
  description: 'A test project description',
  imageUrl: '/assets/images/projects/test.png',
  projectUrl: 'https://example.com',
  githubUrl: 'https://github.com/user/test',
  technologies: ['React', 'TypeScript', 'Tailwind'],
};

describe('ProjectCard', () => {
  it('should render project title', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('Test Project')).toBeInTheDocument();
  });

  it('should render project description', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('A test project description')).toBeInTheDocument();
  });

  it('should render project image', () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByAltText('Test Project');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/base/assets/images/projects/test.png');
  });

  it('should render technology tags', () => {
    render(<ProjectCard project={mockProject} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
  });

  it('should render project link', () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByLabelText('View Test Project project');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should render github link', () => {
    render(<ProjectCard project={mockProject} />);
    const link = screen.getByLabelText('View Test Project on GitHub');
    expect(link).toHaveAttribute('href', 'https://github.com/user/test');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should show overlay on hover', () => {
    const { container } = render(<ProjectCard project={mockProject} />);
    const imageContainer = container.querySelector('.aspect-video');

    fireEvent.mouseEnter(imageContainer!);

    const overlay = container.querySelector('.absolute.inset-0');
    expect(overlay).toHaveClass('opacity-100');
  });

  it('should hide overlay on mouse leave', () => {
    const { container } = render(<ProjectCard project={mockProject} />);
    const imageContainer = container.querySelector('.aspect-video');

    fireEvent.mouseEnter(imageContainer!);
    fireEvent.mouseLeave(imageContainer!);

    const overlay = container.querySelector('.absolute.inset-0');
    expect(overlay).toHaveClass('opacity-0');
  });

  it('should show placeholder on image error', () => {
    render(<ProjectCard project={mockProject} />);
    const image = screen.getByAltText('Test Project');

    fireEvent.error(image);

    expect(image).toHaveAttribute('src', expect.stringContaining('data:image/svg+xml'));
  });
});
