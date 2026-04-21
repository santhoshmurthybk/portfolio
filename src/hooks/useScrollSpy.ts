import { useState, useEffect, useCallback } from 'react';

interface UseScrollSpyOptions {
  /** Section IDs to observe */
  sectionIds: string[];
  /** Offset from top of viewport in pixels */
  offset?: number;
  /** Throttle delay in ms */
  throttleMs?: number;
}

/**
 * Hook for detecting which section is currently in view
 */
export function useScrollSpy({
  sectionIds,
  offset = 100,
  throttleMs = 100,
}: UseScrollSpyOptions) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  const handleScroll = useCallback(() => {
    // Find the section that is currently in view
    let currentSection = sectionIds[0] ?? '';

    for (const id of sectionIds) {
      const element = document.getElementById(id);
      if (!element) continue;

      const rect = element.getBoundingClientRect();
      // Section is considered "active" when its top is at or above the offset
      if (rect.top <= offset) {
        currentSection = id;
      }
    }

    setActiveSection(currentSection);
  }, [sectionIds, offset]);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let lastRun = 0;

    const throttledScroll = () => {
      const now = Date.now();
      if (now - lastRun >= throttleMs) {
        handleScroll();
        lastRun = now;
      } else {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          handleScroll();
          lastRun = Date.now();
        }, throttleMs - (now - lastRun));
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', throttledScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [handleScroll, throttleMs]);

  return activeSection;
}
