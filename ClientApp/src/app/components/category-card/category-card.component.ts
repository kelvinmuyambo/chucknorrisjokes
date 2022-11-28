import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadJoke } from '../../state/jokes/jokes.actions';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent {
  @Input() category!: string;
  constructor(private store: Store) { }

  loadJoke(): void{
    this.store.dispatch(loadJoke({ category: this.category }))
  }
}
