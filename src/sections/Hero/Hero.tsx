import { BiDownload, BiChevronDown } from 'react-icons/bi';
import profile from '../../data/profile.json';
import { TypewriterText } from './TypewriterText';
import { createScrollHandler } from '../../utils/scrollTo';
import type { Profile } from '../../types/portfolio';

const profileData = profile as Profile;

/**
 * Hero section with profile image, name, title, and typewriter animation
 */
export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Profile Image */}
        <div className="mb-8">
          <img
            src={profileData.profileImageUrl}
            alt={`${profileData.name} profile`}
            className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg ring-4 ring-primary-100 dark:ring-primary-900"
            loading="eager"
          />
        </div>

        {/* Greeting */}
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
          {profileData.greeting} 👋
        </p>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          {profileData.name}
        </h1>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 font-medium mb-6">
          {profileData.title}
        </h2>

        {/* Typewriter Text */}
        <div className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 h-8 mb-8">
          <TypewriterText phrases={profileData.typewriterPhrases} />
        </div>

        {/* Bio */}
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {profileData.bio}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={profileData.cvUrl}
            download
            className="btn-primary flex items-center gap-2"
          >
            <BiDownload className="w-5 h-5" />
            Download CV
          </a>
          <a
            href="#about"
            onClick={createScrollHandler('about')}
            className="btn-secondary flex items-center gap-2"
          >
            Learn More
            <BiChevronDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={createScrollHandler('about')}
          className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <BiChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
}
