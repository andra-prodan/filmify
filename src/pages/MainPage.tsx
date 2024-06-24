import { Movie } from '../components/Movie';
import { Nav } from '../components/Nav';
import movieService from '../services/movieService';

const MainPage = () => {
  const movies = movieService().getTop20();

  if (movies) movies.sort((a, b) => b.rating - a.rating);

  return (
    <>
      <Nav />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
        {movies.slice(0, 20).map((movie) => {
          return (
            <div key={movie.idIMDB} className="grid">
              <Movie idIMDB={movie.idIMDB} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MainPage;
