import { SET_STARRED_MOVIES, SetStarredMoviesAction } from '../actions/starredMoviesReducer ';

interface StarredMoviesState {
  starredMovies: string[];
}

const initialState: StarredMoviesState = {
  starredMovies: JSON.parse(localStorage.getItem('starredMovies') || '[]'),
};

export const starredMoviesReducer = (state = initialState, action: SetStarredMoviesAction): StarredMoviesState => {
  switch (action.type) {
    case SET_STARRED_MOVIES:
      return {
        ...state,
        starredMovies: action.payload.starredMovies,
      };
    default:
      return state;
  }
};
