import { Action, createReducer, on } from '@ngrx/store';
import { Joke } from '../../models';
import * as JokesActions from './jokes.actions';

export const jokesFeatureKey = 'jokes';

export interface JokesState {
  jokes: Joke[],
  joke: Joke | null,
  loading: boolean
}

export const initialState: JokesState = {
  jokes: [],
  joke: null,
  loading: false
};

export const reducer = createReducer(
  initialState,

  on(JokesActions.loadJokes, state => ({...state, loading: true})),
  on(JokesActions.loadJoke, state => ({...state, loading: true})),
  on(JokesActions.loadJokesSuccess, (state, { jokes }) => ({ ...state, jokes, loading: false })),
  on(JokesActions.loadJokeSuccess, (state, { joke }) => ({ ...state, joke, loading: false })),
  on(JokesActions.loadJokesFailure, (state, action) => state),
);
