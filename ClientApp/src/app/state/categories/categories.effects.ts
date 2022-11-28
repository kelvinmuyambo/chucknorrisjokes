import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { EMPTY, from, of } from 'rxjs';
import * as CategoriesActions from './categories.actions';
import { CategoryService } from '../../services';


@Injectable()
export class CategoriesEffects {

  loadCategoriess$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CategoriesActions.loadCategories),
      switchMap(() =>
        from(this.service.get()).pipe(
          map((categories) => CategoriesActions.loadCategoriesSuccess({ categories })),
          catchError((error) => of(CategoriesActions.loadCategoriesFailure({ error })))
        )
      )
    );
  });


  constructor(private actions$: Actions, private service: CategoryService) {}
}
