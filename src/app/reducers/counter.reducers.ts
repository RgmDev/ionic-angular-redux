import { createReducer, on } from '@ngrx/store';
import { increase, decrease, reset } from '../actions/counter.actions';

export const counterState = 0;

const _counterReducer = createReducer(counterState,
  on(increase, state => state + 1),
  on(decrease, state => state - 1),
  on(reset, state => state = 0)
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}