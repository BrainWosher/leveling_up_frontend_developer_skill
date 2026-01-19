import { lazy } from 'react';

export const AboutPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      // сделал для теста, позже уберу
      setTimeout(() => resolve(import('./AboutPage')), 2000);
    }),
);
