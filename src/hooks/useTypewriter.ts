import { useState, useEffect, useCallback } from 'react';

interface UseTypewriterOptions {
  /** Array of phrases to cycle through */
  phrases: string[];
  /** Typing speed in ms per character */
  typingSpeed?: number;
  /** Deleting speed in ms per character */
  deletingSpeed?: number;
  /** Pause duration after typing a phrase */
  pauseDuration?: number;
  /** Whether to loop through phrases */
  loop?: boolean;
}

interface UseTypewriterReturn {
  /** Current displayed text */
  text: string;
  /** Whether cursor should be visible */
  isTyping: boolean;
  /** Current phrase index */
  phraseIndex: number;
}

/**
 * Hook for typewriter text animation effect
 */
export function useTypewriter({
  phrases,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  loop = true,
}: UseTypewriterOptions): UseTypewriterReturn {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const currentPhrase = phrases[phraseIndex] ?? '';

  const typeNextChar = useCallback(() => {
    if (isDeleting) {
      // Deleting
      setText((prev) => prev.slice(0, -1));
      if (text === '') {
        setIsDeleting(false);
        if (loop || phraseIndex < phrases.length - 1) {
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    } else {
      // Typing
      if (text.length < currentPhrase.length) {
        setText(currentPhrase.slice(0, text.length + 1));
      } else {
        // Finished typing, pause before deleting
        setIsPaused(true);
        setIsTyping(false);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
          setIsTyping(true);
        }, pauseDuration);
      }
    }
  }, [text, isDeleting, currentPhrase, pauseDuration, loop, phraseIndex, phrases.length]);

  useEffect(() => {
    if (isPaused) return;

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(typeNextChar, speed);

    return () => clearTimeout(timer);
  }, [typeNextChar, isPaused, isDeleting, typingSpeed, deletingSpeed]);

  return { text, isTyping, phraseIndex };
}
