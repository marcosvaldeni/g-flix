import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  movies: any;

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.getPupularMovies();
  }

  getPupularMovies() {
    this.movies = this.moviesService.getPupularMovies();
  }


}
