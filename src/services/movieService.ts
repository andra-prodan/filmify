import axios from 'axios';
import { useEffect, useState } from 'react';

import { IMovie } from '../interfaces/IMovie';
import { moviesDummy } from '../utils/dummyData';

const movieService = () => {
  const getTop20 = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        await axios({
          url: `https://www.myapifilms.com/imdb/moviemeter?token=${process.env.REACT_APP_FILMS_API_TOKEN}&meter=Movie&format=json`,
        })
          .then((res) => setMovies(res.data.data.movies))
          .catch(() => setMovies(moviesDummy))
          .finally(() => {
            setLoading(false);
          });
      };

      fetchData();
    }, []);

    return { movies, loading };
  };

  const getMovie = (idIMDB: string) => {
    const [movie, setMovie] = useState<IMovie | null>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      const fetchData = async (idIMDB: string) => {
        setLoading(true);
        await axios({
          url: `https://www.myapifilms.com/imdb/idIMDB?idIMDB=${idIMDB}&token=${process.env.REACT_APP_FILMS_API_TOKEN}&format=json&language=en-us&aka=0&business=0&seasons=0&seasonYear=0&technical=0&trailers=0&movieTrivia=0&awards=0&moviePhotos=0&movieVideos=0&actors=0&biography=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&similarMovies=0&goofs=0&keyword=0&quotes=0&fullSize=0&companyCredits=0&filmingLocations=0&directors=1&writers=1`,
        })
          .then((res) => setMovie(res.data.data.movies.find((id: string) => id == idIMDB)))
          .catch(() => setMovie(moviesDummy.find((movie: IMovie) => movie.idIMDB == idIMDB)))
          .finally(() => {
            setLoading(false);
          });
      };

      fetchData(idIMDB);
    }, []);

    return { movie, loading };
  };

  return { getTop20, getMovie };
};

export default movieService;
