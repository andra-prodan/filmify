import { createBrowserRouter } from 'react-router-dom';

import ChartPage from '../pages/ChartPage';
import FavoritesPage from '../pages/FavoritesPage';
import MainPage from '../pages/MainPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage,
  },
  {
    path: '/chart',
    Component: ChartPage,
  },
  {
    path: '/favorites',
    Component: FavoritesPage,
  },
]);
