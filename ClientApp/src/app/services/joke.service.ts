import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Joke, SearchResult } from '../models';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  get(category?: string | null): Observable<Joke> {
    return this.http.get<Joke>(this.baseUrl + `jokes?category=${category || ''}`);
  }

  search(query: string): Observable<Joke[]> {
    return this.http
      .get<SearchResult<Joke>>(this.baseUrl + `jokes/search?query=${query}`)
      .pipe(map(result => result.result));
  }
}
