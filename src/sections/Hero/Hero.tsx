import { BiDownload, BiChevronDown } from 'react-icons/bi';
import { SiReact, SiTypescript, SiNodedotjs, SiAmazon, SiMongodb, SiGraphql, SiDocker, SiTailwindcss, SiGit } from 'react-icons/si';
import profile from '../../data/profile.json';
import { TypewriterText } from './TypewriterText';
import { createScrollHandler } from '../../utils/scrollTo';
import { getAssetPath } from '../../utils/assets';
import type { Profile } from '../../types/portfolio';

const profileData = profile as Profile;

const FLOATING_ICONS = [
  { Icon: SiReact, color: 'text-cyan-500', position: 'top-24 left-[8%]', delay: '0s', size: 'w-10 h-10' },
  { Icon: SiTypescript, color: 'text-blue-600', position: 'top-20 right-[12%]', delay: '0.5s', size: 'w-8 h-8' },
  { Icon: SiNodedotjs, color: 'text-green-600', position: 'bottom-28 left-[6%]', delay: '1s', size: 'w-9 h-9' },
  { Icon: SiAmazon, color: 'text-orange-500', position: 'top-[45%] left-[3%]', delay: '1.5s', size: 'w-8 h-8' },
  { Icon: SiMongodb, color: 'text-green-500', position: 'bottom-36 right-[8%]', delay: '2s', size: 'w-10 h-10' },
  { Icon: SiGraphql, color: 'text-pink-500', position: 'top-[55%] right-[5%]', delay: '2.5s', size: 'w-7 h-7' },
  { Icon: SiDocker, color: 'text-blue-500', position: 'top-36 left-[4%]', delay: '3s', size: 'w-8 h-8' },
  { Icon: SiTailwindcss, color: 'text-teal-500', position: 'bottom-20 right-[15%]', delay: '3.5s', size: 'w-9 h-9' },
  { Icon: SiGit, color: 'text-orange-600', position: 'top-28 right-[6%]', delay: '4s', size: 'w-7 h-7' },
];

/**
 * Hero section with profile image, name, title, and typewriter animation
 */
export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-300/30 dark:bg-primary-600/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 -right-40 w-96 h-96 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-cyan-300/30 dark:bg-cyan-600/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
        {FLOATING_ICONS.map(({ Icon, color, position, delay, size }, index) => (
          <div
            key={index}
            className={`absolute ${position} ${color} opacity-30 dark:opacity-20 animate-float`}
            style={{ animationDelay: delay }}
          >
            <Icon className={size} />
          </div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-2 animate-fadeInUp">
              {profileData.greeting} 👋
            </p>

            {/* Typewriter Text */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2 animate-fadeInUp animation-delay-200">
              <TypewriterText phrases={profileData.typewriterPhrases} />
            </div>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl text-primary-600 dark:text-primary-400 font-medium mb-6 animate-fadeInUp animation-delay-400">
              {profileData.title}
            </h2>

            {/* Bio */}
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed animate-fadeInUp animation-delay-600">
              {profileData.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 animate-fadeInUp animation-delay-800">
              <a
                href={getAssetPath(profileData.cvUrl)}
                download
                className="btn-primary flex items-center gap-2 hover:scale-105 transition-transform"
              >
                <BiDownload className="w-5 h-5" />
                Download CV
              </a>
              <a
                href="#about"
                onClick={createScrollHandler('about')}
                className="btn-secondary flex items-center gap-2 hover:scale-105 transition-transform"
              >
                Learn More
                <BiChevronDown className="w-5 h-5" />
              </a>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-2 animate-fadeInUp animation-delay-1000">
              <span className="text-xs text-gray-500 dark:text-gray-400 mr-2">Tech Stack:</span>
              {['React', 'TypeScript', 'Node.js', 'AWS', 'MongoDB'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Profile Image with Decorations */}
          <div className="flex-shrink-0 relative">
            {/* Animated Rings */}
            <div className="absolute inset-0 -m-4 animate-spin-slow">
              <div className="w-full h-full rounded-full border-2 border-dashed border-primary-300/50 dark:border-primary-600/30" />
            </div>
            <div className="absolute inset-0 -m-8 animate-spin-reverse">
              <div className="w-full h-full rounded-full border border-purple-300/40 dark:border-purple-600/20" />
            </div>
            
            {/* Glowing Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/20 to-purple-400/20 blur-2xl scale-110 animate-pulse" />
            
            {/* Profile Image */}
            <img
              src={getAssetPath(profileData.profileImageUrl)}
              alt={`${profileData.name} profile`}
              className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-2xl ring-4 ring-white dark:ring-gray-800 animate-fadeIn"
              loading="eager"
            />
          </div>
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
