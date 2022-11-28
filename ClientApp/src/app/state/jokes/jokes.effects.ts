import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import * as JokesActions from './jokes.actions';
import { JokeService } from '../../services';
import { loadJokesFailure, loadJokesSuccess, loadJokeSuccess } from './jokes.actions';


@Injectable()
export class JokesEffects {
  loadJokess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JokesActions.loadJokes),
      switchMap((action) =>
        from(this.service.search(action.query)).pipe(
          map((jokes) => loadJokesSuccess({ jokes })),
          catchError((error) => of(loadJokesFailure({ error })))
        )
      )
    );
  });

  loadJoke$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(JokesActions.loadJoke),
      switchMap((action) =>
        from(this.service.get(action.category)).pipe(
          map((joke) => loadJokeSuccess({ joke })),
          catchError((error) => of(loadJokesFailure({ error })))
        )
      )
    );
  });


  constructor(private actions$: Actions, private service: JokeService) { }
}
