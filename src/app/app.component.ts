import { Component } from '@angular/core';
import { PeliculasService } from './peliculas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leccionAngular';
  movies: any;
  movieID : any;
  genres:any;
  actor:any=[];
  infoPeli:any;
  constructor(private peliculas:PeliculasService){}

  getMoviesName(name:any){
    this.peliculas.getMoviesName(name.value).subscribe({
      next:(s)=>{
        this.movies = s.results;
        
      },
      error: (e)=>{
        debugger
      }
    })
  }

  getMovieFromID(id:number){
    
    this.peliculas.getMovieFromID(id).subscribe({
      next:(s)=>{
        this.movieID = s;
        debugger
        
      },
      error: (e)=>{
        debugger
      }
    })
    this.peliculas.getMovieFromID(id).subscribe({
      next:(s)=>{
        this.genres = s.genres;
        
      },
      error: (e)=>{
        debugger
      }
    })
    
  }
 /* ngOnInit(){
  this.getActor("jim");
 } */
  getActor(actorName:any){
    this.peliculas.getActor(actorName.value).subscribe({
      next:(s)=>{
        debugger
        this.actor = s.results;

        console.log(this.actor)
        debugger
        
      },
      error: (e)=>{
        debugger
      }
    })
    /* this.peliculas.getActor(actorName.value).subscribe({
      next:(s)=>{
        debugger
        this.infoPeli = s.results.known_for;
        debugger
        
      },
      error: (e)=>{
        debugger
      }
    }) */
    
  }
}
