import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  movies: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getPupularMovies();
  }

  getPupularMovies() {
    const header = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2RmZmQ2MzQ0MTI0ZWE4NjVkMDk3M2ZhODUyNzkyYSIsIm5iZiI6MTcxOTY1NTI1MC45ODc4NTcsInN1YiI6IjY0MTIyMzM5ZmU2YzE4MDBmOWJkNGVmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPy9ngOOeAlRLbsyvL1Tr0ukNWbxhjAkiNlOqU1_330'});
    this.httpClient.get('https://api.themoviedb.org/3//movie/popular', { headers: header})
      .subscribe((data) => {
        this.movies = data;
      });
  }


}
