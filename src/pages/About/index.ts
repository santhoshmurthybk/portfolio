import { lazy } from 'react';

export const About = lazy(() =>
  import('./About').then((module) => ({ default: module.About }))
);
