import { createReducer, on } from '@ngrx/store';
import { setOptions } from '../actions/options.actions';

export const optionsState = {
    text: null,
    select: null,
    checkbox: {
      jonSnow: false,
      daenerysTargaryen: false,
      tyrionLannister: false
    },
    radio: null,
    datetime: null
  };

const _optionsReducer = createReducer(optionsState,
  on(setOptions, (state, { options }) => ({
    text: options.text,
    select: options.select,
    checkbox: {
      jonSnow: options.checkbox.jonSnow,
      daenerysTargaryen: options.checkbox.daenerysTargaryen,
      tyrionLannister: options.checkbox.tyrionLannister
    },
    radio: options.radio,
    datetime: options.datetime
  }))
);

export function optionsReducer(state, action) {
  return _optionsReducer(state, action);
}