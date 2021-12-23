import { createAction, props } from '@ngrx/store';
import { OptionsState } from '../app.reducers';

export const setOptions = createAction('[Options] setOptions', props<{ options: OptionsState }>());