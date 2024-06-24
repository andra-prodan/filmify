export const SET_STARRED_MOVIES = 'SET_STARRED_MOVIES';

export interface SetStarredMoviesAction {
  type: typeof SET_STARRED_MOVIES;
  payload: {
    starredMovies: string[];
  };
}
