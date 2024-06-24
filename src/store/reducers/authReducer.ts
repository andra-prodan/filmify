const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const storedUser = localStorage.getItem('user');
if (storedUser) {
  initialState.isAuthenticated = true;
  initialState.user = JSON.parse(storedUser);
}

export const authReducer = (state = initialState, action: AuthAction): AuthState => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {
    user: { username: string };
  };
}

interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export type AuthAction = LoginSuccessAction | LogoutSuccessAction;
