/**
 * Utility to get the correct asset path for both local dev and GitHub Pages deployment
 * Vite sets import.meta.env.BASE_URL based on the 'base' config
 */
export function getAssetPath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${cleanPath}`;
}
