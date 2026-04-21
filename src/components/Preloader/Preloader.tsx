import { useState, useEffect } from 'react';

interface PreloaderProps {
  /** Minimum time to show preloader in ms */
  minDuration?: number;
}

/**
 * Preloader component with 3 bouncing dots animation
 * Displays for minimum 500ms, dismisses on DOMContentLoaded
 */
export function Preloader({ minDuration = 500 }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const startTime = Date.now();

    const hidePreloader = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        setIsFading(true);
        // Wait for fade animation (200ms) before removing
        setTimeout(() => {
          setIsVisible(false);
        }, 200);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
      return () => window.removeEventListener('load', hidePreloader);
    }
  }, [minDuration]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition-opacity duration-200 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
      role="status"
      aria-label="Loading"
    >
      <div className="flex space-x-2">
        <div
          className="h-3 w-3 rounded-full bg-primary-600 animate-bounce-dot"
          style={{ animationDelay: '0ms' }}
        />
        <div
          className="h-3 w-3 rounded-full bg-primary-600 animate-bounce-dot"
          style={{ animationDelay: '160ms' }}
        />
        <div
          className="h-3 w-3 rounded-full bg-primary-600 animate-bounce-dot"
          style={{ animationDelay: '320ms' }}
        />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
