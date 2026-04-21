interface ScrollToOptions {
  /** Target element ID (without #) */
  targetId: string;
  /** Offset from top in pixels */
  offset?: number;
  /** Scroll behavior */
  behavior?: ScrollBehavior;
}

/**
 * Smooth scroll to a target element by ID
 */
export function scrollTo({ targetId, offset = 0, behavior = 'smooth' }: ScrollToOptions): void {
  const element = document.getElementById(targetId);
  if (!element) {
    console.warn(`Element with id "${targetId}" not found`);
    return;
  }

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });
}

/**
 * Create a click handler for navigation links
 */
export function createScrollHandler(targetId: string, offset = 80) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollTo({ targetId, offset });
    // Update URL hash without scrolling
    window.history.pushState(null, '', `#${targetId}`);
  };
}
