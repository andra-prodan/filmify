import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';

import movieService from '../../services/movieService';
import MainPage from '../MainPage';

const mockMovies = [
  {
    idIMDB: 'tt0111161',
    rating: 9.3,
    title: 'The Shawshank Redemption',
    urlIMDB: 'https://www.imdb.com/title/tt0111161/',
    urlPoster: 'https://m.media-amazon.com/images/I/71715eBi1sL._AC_UF894,1000_QL80_.jpg',
    year: 1994,
    countries: ['USA'],
    directors: [
      {
        id: '1',
        name: 'Frank Darabont',
      },
    ],
    genres: ['Drama'],
    languages: ['English'],
    metascore: 80,
    rated: 'R',
    releaseDate: '1994-09-22',
    runtime: 142,
    simplePlot:
      'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    type: 'movie',
    votes: 2345678,
    writers: [
      {
        id: '2',
        name: 'Stephen King',
      },
      {
        id: '3',
        name: 'Frank Darabont',
      },
    ],
  },
];

jest.mock('../../services/movieService', () => ({
  __esModule: true,
  default: () => ({
    getTop20: jest.fn(() => ({
      movies: mockMovies,
      loading: false,
    })),
  }),
}));

jest.mock('../../components/Movie', () => ({
  Movie: ({ idIMDB }: { idIMDB: string }) => <div data-testid="movie">{idIMDB}</div>,
}));

jest.mock('../../components/Nav', () => ({
  Nav: () => <div data-testid="nav">Navigation</div>,
}));

describe('MainPage component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders top 20 movies when loaded', async () => {
    jest.spyOn(movieService(), 'getTop20').mockReturnValueOnce({
      movies: mockMovies,
      loading: false,
    });

    render(<MainPage />);

    await waitFor(() => {
      expect(screen.getByText('Top 20 Movies')).toBeInTheDocument();
      expect(screen.queryByTestId('loading-spinner')).toBeNull();
    });

    mockMovies.forEach((movie) => {
      expect(screen.getByTestId('movie')).toHaveTextContent(movie.idIMDB);
    });
  });
});
