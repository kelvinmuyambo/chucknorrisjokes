import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Joke } from '../../models/joke';
import { loadJokes, loadJokeSuccess } from '../../state/jokes/jokes.actions';
import { selectJokes } from '../../state/jokes/jokes.selectors';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output() selectJoke = new EventEmitter<Joke>();
  jokes$ = this.store.select(selectJokes)
  showOptions = false;
  query!: string;

  constructor(private store: Store) { }

  focus(e?: any): void {
    this.showOptions = !!this.query && this.query.length > 2;
  }

  blur(e: any): void {
    setTimeout(() => this.showOptions = false, 300);
  }

  change(e: any): void {
    this.focus();
    if (this.showOptions) {
      this.store.dispatch(loadJokes({ query: this.query }));
    }
  }

  select(joke: Joke): void {
    this.store.dispatch(loadJokeSuccess({ joke }));
  }
}
