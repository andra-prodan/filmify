import { fakeLoginAPI } from '../../api';
import { AppDispatch } from '../index';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (username: string, password: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fakeLoginAPI(username, password);

      if (response.success && response.user) {
        localStorage.setItem('user', JSON.stringify(response.user));

        dispatch({ type: LOGIN_SUCCESS, payload: { user: response.user } });
      } else {
        dispatch({ type: LOGIN_FAILURE, payload: { error: 'Login failed' } });
      }
    } catch (error) {
      console.error('Login error:', error);
      dispatch({ type: LOGIN_FAILURE, payload: { error: error } });
    }
  };
};

export const logout = () => {
  return (dispatch: AppDispatch) => {
    localStorage.removeItem('user');

    dispatch({ type: LOGOUT });
  };
};
