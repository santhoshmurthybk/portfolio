import { BiLogoGithub } from 'react-icons/bi';

/**
 * Footer component with copyright and credits
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Santhosh. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-xs text-gray-500 dark:text-gray-500">
              Developed using{' '}
              <span className="font-medium text-primary-600 dark:text-primary-400">SpecKit</span>
              {' '}+{' '}
              <span className="font-medium text-primary-600 dark:text-primary-400">GitHub Copilot (Claude)</span>
            </span>
            <a
              href="https://github.com/santhoshmurthybk/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-primary-600 dark:text-gray-500 dark:hover:text-primary-400 transition-colors"
              aria-label="View source on GitHub"
            >
              <BiLogoGithub className="w-4 h-4" />
              <span>Source</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
