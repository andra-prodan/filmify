import { IPerson } from './IPerson';

export interface IMovie {
  idIMDB: string;
  rating: number;
  title: string;
  urlIMDB: string;
  urlPoster: string;
  year: number;
  countries?: string[];
  directors?: IPerson[];
  genres?: string[];
  languages?: string[];
  metascore?: number;
  rated?: string;
  releaseDate?: string;
  runtime?: number;
  simplePlot?: string;
  type?: string;
  votes?: number;
  writers?: IPerson[];
}
