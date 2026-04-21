import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWordpress,
} from 'react-icons/bi';
import socialLinks from '../../data/socialLinks.json';
import type { SocialLink } from '../../types/portfolio';

const socialLinksData = socialLinks as SocialLink[];

// Map icon string names to actual icon components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWordpress,
};

interface SocialLinksProps {
  /** Additional CSS classes */
  className?: string;
  /** Icon size class */
  iconSize?: string;
}

/**
 * SocialLinks component displaying social media links
 */
export function SocialLinks({ className = '', iconSize = 'w-6 h-6' }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinksData.map((link) => {
        const IconComponent = ICON_MAP[link.icon];
        if (!IconComponent) return null;

        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors"
            aria-label={`Visit ${link.platform}`}
          >
            <IconComponent className={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
