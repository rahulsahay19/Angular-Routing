import { Injectable } from '@angular/core';

@Injectable()
export class MoviesService {

    constructor() { }

  private movies = [
        {id:1, name: 'Titanic', directorName:'James Cameron',releaseYear:'1997'},
        {id:2, name: 'Godzilla',directorName:'Roland Emmerich',releaseYear:'1998'},
        {id:3, name: 'Jurassic World',directorName:'Colin Trevorrow',releaseYear:'2015'}
      ];

      getMovies() {
        return this.movies;
      }
    
      getMovie(id: number) {
        const movie = this.movies.find(
          (m) => {
            return m.id === id;
          }
        );
        return movie;
      }
      
      updateMovie(id: number, name: string, directorName: string, releaseYear:string) {
        const movie = this.movies.find(
          (m) => {
            return m.id === id;
          }
        );
        if (movie) {
          movie.name = name;
          movie.directorName = directorName;
          movie.releaseYear=releaseYear;
        }
      }
}