import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  get(): Observable<string[]>{
    return this.http.get<string[]>(this.baseUrl + 'categories');
  }
}
