import { useState } from 'react';
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';
import { Card } from '../../components/Card';
import { getAssetPath } from '../../utils/assets';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

const PLACEHOLDER_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"%3E%3Crect fill="%23374151" width="400" height="300"/%3E%3Ctext fill="%239ca3af" font-family="system-ui" font-size="16" x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle"%3EImage not available%3C/text%3E%3C/svg%3E';

/**
 * ProjectCard component for displaying project information
 */
export function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="group">
      {/* Image Container */}
      <div
        className="relative aspect-video overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={imageError ? PLACEHOLDER_IMAGE : getAssetPath(project.imageUrl)}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={handleImageError}
          loading="lazy"
        />

        {/* Overlay on hover */}
        <div
          className={`absolute inset-0 bg-primary-900/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-primary-600 hover:bg-primary-100 transition-colors"
            aria-label={`View ${project.title} project`}
          >
            <BiLinkExternal className="w-6 h-6" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full text-primary-600 hover:bg-primary-100 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
          >
            <BiLogoGithub className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
