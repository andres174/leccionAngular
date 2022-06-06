import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) { }

  getMoviesName(name:string){
    return this.http.get<any>('https://api.themoviedb.org/3/search/movie?api_key=ebdcb0263960de0880214e632c7d2682&language=es-MX&query=' + name + '&page=1&include_adult=false')
  }
  getMovieFromID(idPelicula:number){
    return this.http.get<any>('https://api.themoviedb.org/3/movie/' + idPelicula + '?api_key=ebdcb0263960de0880214e632c7d2682&language=en-US')
  }
  getActor(actorName:string){
    return this.http.get<any>('https://api.themoviedb.org/3/search/person?api_key=ebdcb0263960de0880214e632c7d2682&language=en-US&query=' + actorName + '&page=1&include_adult=false')
  }
}
