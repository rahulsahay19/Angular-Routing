import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[MoviesService]
})
export class MoviesComponent implements OnInit {

  private movies:{id: number, name: string, directorName: string,releaseYear:string}[] = [];
  constructor(private moviesService:MoviesService) { }

  ngOnInit() {
    this.movies=this.moviesService.getMovies();
  }

}
