import { Navigate } from 'react-router-dom';

import { Movie } from '../components/Movie';
import { Nav } from '../components/Nav';
import { useAuth } from '../hooks/useAuth';
import { RootState, useAppSelector } from '../store';

const FavoritesPage = () => {
  const isAuthenticated = useAuth();
  const starredMovies = useAppSelector((state: RootState) => state.starredMovies.starredMovies);

  if (!isAuthenticated) return <Navigate replace to="/login" />;

  return (
    <>
      <Nav />
      {starredMovies.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-600 text-lg">Your favorite list is empty</p>
        </div>
      ) : (
        <>
          <div className="flex m-auto justify-center">
            <h2 className="text-xl font-bold m-4">Your Favorites</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 p-6">
            {starredMovies.map((idIMDB) => (
              <div key={idIMDB} className="flex justify-center">
                <Movie idIMDB={idIMDB} isFavoritePage={true} />
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default FavoritesPage;
