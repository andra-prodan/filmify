import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';

import { authReducer } from './reducers/authReducer';
import { starredMoviesReducer } from './reducers/starredMoviesReducer ';

const rootReducer = combineReducers({
  auth: authReducer,
  starredMovies: starredMoviesReducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
