import { lazy } from 'react';

export const Home = lazy(() =>
  import('./Home').then((module) => ({ default: module.Home }))
);
