/**
 * Application configuration from environment variables
 * All environment variables must be prefixed with VITE_ to be exposed to the client
 */
export const APP_CONFIG = {
  title: import.meta.env.VITE_APP_TITLE || 'Portfolio',
  version: import.meta.env.VITE_APP_VERSION || '0.0.0',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  mode: import.meta.env.MODE,
} as const;
