import { Action, createReducer, on } from '@ngrx/store';
import * as CategoriesActions from './categories.actions';

export const categoriesFeatureKey = 'categories';

export interface CategoriesState {
  categories: string[]
}

export const initialState: CategoriesState = {
  categories: []
};

export const reducer = createReducer(
  initialState,

  on(CategoriesActions.loadCategories, state => state),
  on(CategoriesActions.loadCategoriesSuccess, (state, { categories }) => ({ ...state, categories })),
  on(CategoriesActions.loadCategoriesFailure, (state, action) => state),

);
