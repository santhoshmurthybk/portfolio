import { lazy } from 'react';

export const NotFound = lazy(() =>
  import('./NotFound').then((module) => ({ default: module.NotFound }))
);
