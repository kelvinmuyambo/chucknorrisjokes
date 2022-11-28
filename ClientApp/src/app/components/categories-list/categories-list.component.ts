import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCategories } from '../../state/categories/categories.actions';
import { selectCategories } from '../../state/categories/categories.selectors';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  @Output() selected = new EventEmitter<string | undefined>();
  categories$ = this.store.select(selectCategories);

  constructor(private store: Store) { }

  ngOnInit(): void {
      this.store.dispatch(loadCategories())
  }
  
}
