import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { useAppSelector } from '../../store';
import FavoritesPage from '../FavoritesPage';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: jest.fn(),
}));

jest.mock('../../components/Movie', () => ({
  Movie: ({ idIMDB }: { idIMDB: string }) => <div data-testid="movie">{idIMDB}</div>,
}));

jest.mock('../../components/Nav', () => ({
  Nav: () => <div>Nav Component</div>,
}));

jest.mock('../../hooks/useAuth');
jest.mock('../../store');

describe('FavoritesPage', () => {
  beforeEach(() => {
    (Navigate as jest.Mock).mockClear();
    (useAuth as jest.Mock).mockClear();
    (useAppSelector as unknown as jest.Mock).mockClear();
  });

  test('redirects to login if not authenticated', () => {
    (useAuth as jest.Mock).mockReturnValue(false);

    render(<FavoritesPage />);

    expect(Navigate).toHaveBeenCalledWith({ replace: true, to: '/login' }, {});
  });

  test('displays empty message if no favorite movies', () => {
    (useAuth as jest.Mock).mockReturnValue(true);
    (useAppSelector as unknown as jest.Mock).mockReturnValue([]);

    render(<FavoritesPage />);

    expect(screen.getByText('Your favorite list is empty')).toBeInTheDocument();
  });

  test('displays favorite movies if available', () => {
    (useAuth as jest.Mock).mockReturnValue(true);
    (useAppSelector as unknown as jest.Mock).mockReturnValue(['tt0068646', 'tt0071562']);

    render(<FavoritesPage />);

    expect(screen.getByText('Your Favorites')).toBeInTheDocument();
    expect(screen.getAllByTestId('movie')).toHaveLength(2);
  });
});
