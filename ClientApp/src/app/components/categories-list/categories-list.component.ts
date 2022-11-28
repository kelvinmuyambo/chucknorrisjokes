import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {
  @Input() categories: string[] | null = [];
  @Output() selected = new EventEmitter<string | undefined>();
}
