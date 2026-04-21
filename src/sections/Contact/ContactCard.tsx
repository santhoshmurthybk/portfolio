import { BiPhone, BiEnvelope, BiMap } from 'react-icons/bi';
import { Card } from '../../components/Card';
import type { Contact } from '../../types/portfolio';

// Map icon string names to actual icon components
const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  BiPhone,
  BiEnvelope,
  BiMap,
};

interface ContactCardProps {
  contact: Contact;
}

/**
 * ContactCard component for displaying contact information
 */
export function ContactCard({ contact }: ContactCardProps) {
  const IconComponent = ICON_MAP[contact.icon] ?? BiEnvelope;

  const getHref = () => {
    switch (contact.type) {
      case 'phone':
        return `tel:${contact.value.replace(/\s/g, '')}`;
      case 'email':
        return `mailto:${contact.value}`;
      default:
        return undefined;
    }
  };

  const href = getHref();
  const isClickable = href !== undefined;

  const content = (
    <Card className="p-6 text-center h-full">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
        <IconComponent className="w-7 h-7 text-primary-600 dark:text-primary-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {contact.label}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {contact.value}
      </p>
    </Card>
  );

  if (isClickable) {
    return (
      <a href={href} className="block hover:scale-105 transition-transform">
        {content}
      </a>
    );
  }

  return content;
}
