import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromJokes from './jokes.reducer';

export const selectJokesState = createFeatureSelector<fromJokes.JokesState>(
  fromJokes.jokesFeatureKey
);

export const selectJokes = createSelector(
  selectJokesState,
  (state: fromJokes.JokesState) => state.jokes
);

export const selectJoke = createSelector(
  selectJokesState,
  (state: fromJokes.JokesState) => state.joke
);