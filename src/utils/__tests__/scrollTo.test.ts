import { describe, it, expect, vi, beforeEach } from 'vitest';
import { scrollTo, createScrollHandler } from '../scrollTo';

describe('scrollTo', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock window.scrollTo
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    // Mock window.scrollY
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
  });

  it('should scroll to element by ID', () => {
    const element = document.createElement('div');
    element.id = 'test-section';
    element.getBoundingClientRect = vi.fn().mockReturnValue({ top: 200 });
    document.body.appendChild(element);

    scrollTo({ targetId: 'test-section' });

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 300, // 200 + 100 (scrollY) - 0 (offset)
      behavior: 'smooth',
    });

    document.body.removeChild(element);
  });

  it('should apply offset when scrolling', () => {
    const element = document.createElement('div');
    element.id = 'offset-section';
    element.getBoundingClientRect = vi.fn().mockReturnValue({ top: 200 });
    document.body.appendChild(element);

    scrollTo({ targetId: 'offset-section', offset: 80 });

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 220, // 200 + 100 - 80
      behavior: 'smooth',
    });

    document.body.removeChild(element);
  });

  it('should use custom scroll behavior', () => {
    const element = document.createElement('div');
    element.id = 'auto-section';
    element.getBoundingClientRect = vi.fn().mockReturnValue({ top: 100 });
    document.body.appendChild(element);

    scrollTo({ targetId: 'auto-section', behavior: 'auto' });

    expect(window.scrollTo).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: 'auto' })
    );

    document.body.removeChild(element);
  });

  it('should warn if element not found', () => {
    const consoleWarn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    
    scrollTo({ targetId: 'non-existent' });

    expect(consoleWarn).toHaveBeenCalledWith('Element with id "non-existent" not found');
    expect(window.scrollTo).not.toHaveBeenCalled();

    consoleWarn.mockRestore();
  });
});

describe('createScrollHandler', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {});
    vi.spyOn(window.history, 'pushState').mockImplementation(() => {});
    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
  });

  it('should return a click handler function', () => {
    const handler = createScrollHandler('about');
    expect(typeof handler).toBe('function');
  });

  it('should prevent default on click', () => {
    const element = document.createElement('div');
    element.id = 'about';
    element.getBoundingClientRect = vi.fn().mockReturnValue({ top: 500 });
    document.body.appendChild(element);

    const handler = createScrollHandler('about');
    const event = { preventDefault: vi.fn() } as unknown as React.MouseEvent<HTMLAnchorElement>;
    
    handler(event);

    expect(event.preventDefault).toHaveBeenCalled();
    
    document.body.removeChild(element);
  });

  it('should update URL hash', () => {
    const element = document.createElement('div');
    element.id = 'contact';
    element.getBoundingClientRect = vi.fn().mockReturnValue({ top: 1000 });
    document.body.appendChild(element);

    const handler = createScrollHandler('contact');
    const event = { preventDefault: vi.fn() } as unknown as React.MouseEvent<HTMLAnchorElement>;
    
    handler(event);

    expect(window.history.pushState).toHaveBeenCalledWith(null, '', '#contact');
    
    document.body.removeChild(element);
  });

  it('should use default offset of 80', () => {
    const element = document.createElement('div');
    element.id = 'portfolio';
    element.getBoundingClientRect = vi.fn().mockReturnValue({ top: 300 });
    document.body.appendChild(element);

    const handler = createScrollHandler('portfolio');
    const event = { preventDefault: vi.fn() } as unknown as React.MouseEvent<HTMLAnchorElement>;
    
    handler(event);

    expect(window.scrollTo).toHaveBeenCalledWith({
      top: 220, // 300 + 0 (scrollY) - 80 (default offset)
      behavior: 'smooth',
    });
    
    document.body.removeChild(element);
  });
});
