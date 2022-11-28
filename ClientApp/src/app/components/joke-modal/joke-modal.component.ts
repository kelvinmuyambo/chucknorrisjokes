import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadJokeSuccess } from 'src/app/state/jokes/jokes.actions';
import { selectJoke } from 'src/app/state/jokes/jokes.selectors';

@Component({
  selector: 'app-joke-modal',
  templateUrl: './joke-modal.component.html',
  styleUrls: ['./joke-modal.component.css']
})
export class JokeModalComponent {
  joke$ = this.store.select(selectJoke)

  constructor(private store: Store) { }

  closeJoke(): void{
    this.store.dispatch(loadJokeSuccess({joke: null}))
  }
}
