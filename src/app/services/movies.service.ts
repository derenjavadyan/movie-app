import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '574f6a8c429cf89db906ebf7ef1fed8c'; 

  constructor(private http: HttpClient) { }

  getMovies(type: string = 'upcoming'){
    return this.http.get(`${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`);
  }
}

