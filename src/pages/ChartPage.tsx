import 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';

import { LoadingSpinner } from '../components/LoadingSpinner';
import { Nav } from '../components/Nav';
import movieService from '../services/movieService';

interface IMoviesByYear {
  [year: number]: number;
}

const ChartPage = () => {
  const { movies, loading } = movieService().getTop20();

  const [moviesByYear, setMoviesByYear] = useState<IMoviesByYear>({});
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: 'Movies by Year',
        data: [] as number[],
        backgroundColor: [] as string[],
      },
    ],
  });

  useEffect(() => {
    const calculateMoviesByYear = () => {
      const initialMoviesByYear: IMoviesByYear = movies.reduce((acc, movie) => {
        const year = movie.year;
        if (acc[year]) {
          acc[year]++;
        } else {
          acc[year] = 1;
        }

        return acc;
      }, {} as IMoviesByYear);

      setMoviesByYear(initialMoviesByYear);
    };

    calculateMoviesByYear();
  }, [movies]);

  useEffect(() => {
    const labels = Object.keys(moviesByYear).map((year) => year.toString());
    const data = Object.values(moviesByYear);
    const backgroundColors = generateRandomColors(labels.length);

    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Movies by Year',
          data: data,
          backgroundColor: backgroundColors,
        },
      ],
    });
  }, [moviesByYear]);

  const generateRandomColors = (numColors: number) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
      colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }

    return colors;
  };

  if (loading)
    return (
      <>
        <Nav />
        <LoadingSpinner />
      </>
    );

  return (
    <>
      <Nav />
      <div className="flex m-auto justify-center">
        <h2 className="text-xl font-bold m-4">Distribution of Movies by Year</h2>
      </div>
      <div className="flex m-auto justify-center" style={{ position: 'relative', width: '80vw', height: '80vh' }}>
        <Pie data={chartData} />
      </div>
    </>
  );
};

export default ChartPage;
