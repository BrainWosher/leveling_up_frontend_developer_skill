import { lazy } from 'react';

export const MainPageAsync = lazy(
  () =>
    new Promise((resolve) => {
      //@ts-ignore
      // сделал для теста, позже уберу
      setTimeout(() => resolve(import('./MainPage')), 2000);
    }),
);
