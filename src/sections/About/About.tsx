import { BiDownload } from 'react-icons/bi';
import { TabGroup } from '../../components/TabGroup';
import { SkillsTab } from './SkillsTab';
import { ExperienceTab } from './ExperienceTab';
import { EducationTab } from './EducationTab';
import profile from '../../data/profile.json';
import type { Profile } from '../../types/portfolio';

const profileData = profile as Profile;

const TABS = [
  { id: 'skills', label: 'Skills', content: <SkillsTab /> },
  { id: 'experience', label: 'Experience', content: <ExperienceTab /> },
  { id: 'education', label: 'Education', content: <EducationTab /> },
];

/**
 * About section with bio, CV download, and tabbed content
 */
export function About() {
  return (
    <section
      id="about"
      className="min-h-screen py-20 bg-white dark:bg-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 dark:bg-primary-500 mx-auto rounded-full" />
        </div>

        {/* Bio Section */}
        <div className="mb-12">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
            {profileData.bio}
          </p>
          
          {/* CV Download Button */}
          <div className="mt-8 text-center">
            <a
              href={profileData.cvUrl}
              download
              className="btn-primary inline-flex items-center gap-2"
            >
              <BiDownload className="w-5 h-5" />
              Download CV
            </a>
          </div>
        </div>

        {/* Tabbed Content */}
        <TabGroup tabs={TABS} defaultTab="skills" />
      </div>
    </section>
  );
}
