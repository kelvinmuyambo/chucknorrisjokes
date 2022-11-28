import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Joke } from '../../models/joke';
import { CategoryService, JokeService } from '../../services';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories$: Observable<string[]> = new Observable();
  joke$: Observable<Joke> = new Observable();
  category!: string | undefined;

  constructor(private service: CategoryService, private jokeService: JokeService) {
    this.categories$ = this.service.get();
  }

  ngOnInit(): void {
  }

  selectCategory(category?: string): void {
    this.category = category;
    this.joke$ = this.jokeService.get(category);
  }

  closeCategory(): void{
    this.category = undefined;
    this.joke$ = new Observable();
  }

  selectJoke(joke: Joke):void{
    this.category = 'search';
    this.joke$ = new Observable(obs => {
      obs.next(joke);
      obs.complete();
    });
  }

}
