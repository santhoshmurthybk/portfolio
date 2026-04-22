import { BiLinkExternal } from 'react-icons/bi';
import { SiMicrosoft, SiIbm, SiAmazon } from 'react-icons/si';
import { SkillsTab } from './SkillsTab';
import { ExperienceTab } from './ExperienceTab';
import { EducationTab } from './EducationTab';
import { AnimatedBackground } from '../../components/AnimatedBackground';
import certifications from '../../data/certifications.json';
import type { Certification } from '../../types/portfolio';

const certificationsData = certifications as Certification[];

const LOGO_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  microsoft: SiMicrosoft,
  ibm: SiIbm,
  aws: SiAmazon,
};

const LOGO_COLORS: Record<string, string> = {
  microsoft: 'text-[#00A4EF]',
  ibm: 'text-[#054ADA]',
  aws: 'text-[#FF9900]',
};

/**
 * About section with bio, CV download, and stacked content
 */
export function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      <AnimatedBackground variant="purple" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-500 mx-auto rounded-full" />
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills
          </h3>
          <SkillsTab />
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h3>
          <ExperienceTab />
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h3>
          <EducationTab />
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificationsData.map((cert) => {
              const LogoIcon = LOGO_ICONS[cert.logo];
              const logoColor = LOGO_COLORS[cert.logo];
              return (
                <a
                  key={cert.id}
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card p-4 hover:scale-105 transition-transform duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    {LogoIcon && (
                      <div className={`flex-shrink-0 ${logoColor}`}>
                        <LogoIcon className="w-8 h-8" />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {cert.issuer}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-primary-600 dark:text-primary-400">
                        View Credential
                        <BiLinkExternal className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
