import { FaStar, FaTrash } from 'react-icons/fa';

import movieService from '../services/movieService';
import { RootState, useAppDispatch, useAppSelector } from '../store';

export const Movie = ({ idIMDB, isFavoritePage = false }: { idIMDB: string; isFavoritePage?: boolean }) => {
  const { movie } = movieService().getMovie(idIMDB);
  const directors = movie?.directors?.map((director) => director.name).join(', ');

  const dispatch = useAppDispatch();

  const starredMovies = useAppSelector((state: RootState) => state.starredMovies.starredMovies);
  const isStarred = starredMovies.includes(idIMDB);

  const handleFavorites = () => {
    const updatedStarredMovies = isStarred
      ? starredMovies.filter((movieId) => movieId !== idIMDB)
      : [...starredMovies, idIMDB];
    localStorage.setItem('starredMovies', JSON.stringify(updatedStarredMovies));

    dispatch({ type: 'SET_STARRED_MOVIES', payload: { starredMovies: updatedStarredMovies } });
  };

  return (
    <div className="w-full max-w-lg p-4 border rounded shadow-lg flex flex-row">
      <div className="w-1/3">
        <img src={movie?.urlPoster} alt={movie?.title} className="w-full h-full object-cover rounded" />
      </div>
      <div className="w-2/3 pl-4 flex flex-col justify-between relative">
        <div className="flex justify-between items-start gap-2 mb-4">
          <h2 className="text-xl font-semibold mb-2">{movie?.title}</h2>
          {isFavoritePage ? (
            <button className="ml-2 text-red-500 hover:text-red-700" onClick={handleFavorites}>
              <FaTrash size={20} />
            </button>
          ) : (
            <button
              className={`${isStarred ? 'text-yellow-500 hover:text-yellow-700' : 'text-gray-400 hover:text-yellow-500'}`}
              onClick={handleFavorites}
            >
              <FaStar size={24} />
            </button>
          )}
        </div>
        <div>
          <p className="text-gray-600 mb-1">{movie?.year}</p>
          <div className="mb-2">
            <p className="font-semibold">Directed by:</p>
            <p className="text-gray-800">{directors}</p>
          </div>
          <p className="text-gray-600">{movie?.runtime} minutes</p>
        </div>
      </div>
    </div>
  );
};
