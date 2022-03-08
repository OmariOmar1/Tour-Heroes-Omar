import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./heroes/mock-heroes";
import {Observable,of} from "rxjs";
import {MessageService} from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import {error} from "@angular/compiler/src/util";





@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api

  constructor(
    private messageServiceinHeroService:MessageService,
    private http:HttpClient
  ) {
  }




  getHeroes(): Observable<Hero[]> {
    this.log("going to the http client");

    let fetchedDataFrom:Observable<Hero[]> = this.http.get<Hero[]>(this.heroesUrl);

    return fetchedDataFrom

      .pipe(
        catchError(this.handleError<Hero[]>(`getHeroes`,[])),
        tap(_=>this.log('fetched heroes'))
      );
  }



  //hero details
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );


  }




  private log(message: string) {
    this.messageServiceinHeroService.add(`HeroService: ${message}`);
  }


  private handleError<T>(operation=`operation`,result?:T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    };
  }

  updateHero(heroChanged:Hero){
    return this.http.put(this.heroesUrl,heroChanged,this.httpOptions);
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}


