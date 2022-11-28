import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from 'src/app/models/joke';
import { JokeService } from '../../services';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  @Output() selectJoke = new EventEmitter<Joke>();
  jokes$: Observable<Joke[]> = new Observable();
  showOptions = false;
  query!: string;

  constructor(private service: JokeService) { }

  focus(e?: any): void {
    this.showOptions = !!this.query && this.query.length > 2;
  }

  blur(e: any): void {
    setTimeout(() => this.showOptions = false, 300);
  }

  change(e: any): void {
    this.focus();
    if (this.showOptions) {
      this.jokes$ = this.service.search(this.query);
    }
  }

  select(joke: Joke): void {
    this.selectJoke.emit(joke);
  }
}
