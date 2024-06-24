import { IMovie } from '../interfaces/IMovie';

export const moviesDummy: IMovie[] = [
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
  {
    idIMDB: 'tt0068646',
    rating: 9.2,
    title: 'The Godfather',
    urlIMDB: 'https://www.imdb.com/title/tt0068646/',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    year: 1972,
    countries: ['USA'],
    directors: [
      {
        id: '4',
        name: 'Francis Ford Coppola',
      },
    ],
    genres: ['Crime', 'Drama'],
    languages: ['English', 'Italian'],
    metascore: 100,
    rated: 'R',
    releaseDate: '1972-03-24',
    runtime: 175,
    simplePlot:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    type: 'movie',
    votes: 1623489,
    writers: [
      {
        id: '6',
        name: 'Mario Puzo',
      },
      {
        id: '7',
        name: 'Francis Ford Coppola',
      },
    ],
  },
  {
    idIMDB: 'tt0071562',
    rating: 9.0,
    title: 'The Godfather: Part II',
    urlIMDB: 'https://www.imdb.com/title/tt0071562/',
    urlPoster:
      'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    year: 1974,
    countries: ['USA'],
    directors: [
      {
        id: '8',
        name: 'Francis Ford Coppola',
      },
    ],
    genres: ['Crime', 'Drama'],
    languages: ['English', 'Italian', 'Spanish'],
    metascore: 90,
    rated: 'R',
    releaseDate: '1974-12-20',
    runtime: 202,
    simplePlot:
      'The early life and career of Vito Corleone in 1920s New York is portrayed, while his son, Michael, expands and tightens his grip on his crime syndicate stretching from Lake Tahoe, Nevada to pre-revolution 1958 Cuba.',
    type: 'movie',
    votes: 1136789,
    writers: [
      {
        id: '9',
        name: 'Mario Puzo',
      },
      {
        id: '10',
        name: 'Francis Ford Coppola',
      },
    ],
  },
];
