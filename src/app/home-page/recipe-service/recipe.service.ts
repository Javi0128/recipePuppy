import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  generalEndPoint: string = 'https://api.punkapi.com/v2';

  constructor(private http: HttpClient) { }


  getBeersRecipe(): Observable<any> {
    return this.http.get(`${this.generalEndPoint}/beers`);
  }
}
