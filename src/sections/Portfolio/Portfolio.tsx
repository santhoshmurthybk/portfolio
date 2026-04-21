import { ProjectCard } from './ProjectCard';
import projects from '../../data/projects.json';
import type { Project } from '../../types/portfolio';

const projectsData = projects as Project[];

/**
 * Portfolio section displaying project cards
 */
export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Portfolio
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-500 mx-auto rounded-full mb-4" />
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Click on any project to view the live demo or check out the code on GitHub.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
