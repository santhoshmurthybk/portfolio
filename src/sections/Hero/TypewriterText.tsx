import { useTypewriter } from '../../hooks/useTypewriter';

interface TypewriterTextProps {
  /** Array of phrases to cycle through */
  phrases: string[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * TypewriterText component with animated cursor
 */
export function TypewriterText({ phrases, className = '' }: TypewriterTextProps) {
  const { text, isTyping } = useTypewriter({
    phrases,
    typingSpeed: 100,
    deletingSpeed: 50,
    pauseDuration: 2000,
    loop: true,
  });

  return (
    <span className={`inline-flex items-baseline ${className}`}>
      <span>{text}</span>
      <span
        className={`ml-0.5 inline-block w-0.5 h-6 bg-primary-600 dark:bg-primary-400 ${
          isTyping ? 'animate-pulse' : ''
        }`}
        aria-hidden="true"
      />
    </span>
  );
}
