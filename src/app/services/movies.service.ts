import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getPupularMovies() {
    const header = new HttpHeaders({ 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2RmZmQ2MzQ0MTI0ZWE4NjVkMDk3M2ZhODUyNzkyYSIsIm5iZiI6MTcxOTY1NTI1MC45ODc4NTcsInN1YiI6IjY0MTIyMzM5ZmU2YzE4MDBmOWJkNGVmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPy9ngOOeAlRLbsyvL1Tr0ukNWbxhjAkiNlOqU1_330'});
    return this.httpClient.get('https://api.themoviedb.org/3//movie/popular', { headers: header});
  }


}
