import { FaStar } from 'react-icons/fa';

import movieService from '../services/movieService';

export const Movie = ({ idIMDB }: { idIMDB: string }) => {
  const movie = movieService().getMovie(idIMDB);
  const directors = movie?.directors?.map((director) => director.name).join(', ');
  console.log(movie);

  return (
    <div className="w-full max-w-lg p-4 border rounded shadow-lg flex flex-row">
      <div className="w-1/3">
        <img src={movie?.urlPoster} alt={movie?.title} className="w-full h-full object-cover rounded" />
      </div>
      <div className="w-2/3 pl-4 flex flex-col justify-between relative">
        <div className="flex justify-between items-start gap-2 mb-4">
          <h2 className="text-xl font-semibold mb-2">{movie?.title}</h2>
          <button className="text-gray-400 hover:text-yellow-500">
            <FaStar size={24} />
          </button>
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
