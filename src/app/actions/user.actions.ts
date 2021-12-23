import { createAction, props } from '@ngrx/store';
import { UserState } from '../app.reducers';

export const login = createAction('[User] Login', props<{ user: UserState }>());
export const logout = createAction('[User] Logout');