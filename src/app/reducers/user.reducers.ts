import { createReducer, on } from '@ngrx/store';
import { login, logout } from '../actions/user.actions';

export const userState = {
    email: null,
    token: null,
  };

const _userReducer = createReducer(userState,
  on(login, (state, { user }) => ({
    email: user.email,
    token: user.token,
  })),
  on(logout, (state) => ({
    email: null,
    token: null,
  })),
);

export function userReducer(state, action) {
  return _userReducer(state, action);
}
