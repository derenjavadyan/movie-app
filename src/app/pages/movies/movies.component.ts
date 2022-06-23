import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesServise: MoviesService) { }

  ngOnInit(): void {
    this.moviesServise.searchMovies(2).subscribe((movies => {
      this.movies = movies;
    }))
  }

}
