import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoading } from '../../state/jokes/jokes.selectors';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {
  loading$ = this.store.select(selectLoading);

  constructor(private store: Store) { }
}
