import { createAction, props } from '@ngrx/store';
import { Joke } from '../../models';

export const loadJokes = createAction(
  '[Jokes] Load Jokes',
  props<{ query: string }>()
);

export const loadJoke = createAction(
  '[Jokes] Load Joke',
  props<{ category: string | undefined }>()
);

export const loadJokesSuccess = createAction(
  '[Jokes] Load Jokes Success',
  props<{ jokes: Joke[] }>()
);

export const loadJokeSuccess = createAction(
  '[Jokes] Load Joke Success',
  props<{ joke: Joke | null }>()
);

export const loader = createAction(
  '[Jokes] Loading Jokes',
  props<{ loading: boolean }>()
);

export const loadJokesFailure = createAction(
  '[Jokes] Load Jokes Failure',
  props<{ error: any }>()
);
