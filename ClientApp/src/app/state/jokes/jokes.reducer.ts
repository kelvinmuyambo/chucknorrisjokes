import { Action, createReducer, on } from '@ngrx/store';
import { Joke } from '../../models';
import * as JokesActions from './jokes.actions';

export const jokesFeatureKey = 'jokes';

export interface JokesState {
  jokes: Joke[],
  joke: Joke | null
}

export const initialState: JokesState = {
  jokes: [],
  joke: null
};

export const reducer = createReducer(
  initialState,

  on(JokesActions.loadJokes, state => state),
  on(JokesActions.loadJokesSuccess, (state, { jokes }) => ({ ...state, jokes })),
  on(JokesActions.loadJokeSuccess, (state, { joke }) => ({ ...state, joke })),
  on(JokesActions.loadJokesFailure, (state, action) => state),

);
