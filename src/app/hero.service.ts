import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {Observable,of} from "rxjs";
import {MessageService} from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import {SpinnerService} from "./spinner/spinner.service";


@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'http://localhost/tour-heroes-php/tour-heroes-data-json.php';// URL to php json
  private heroesUrlPost='http://localhost/tour-heroes-php/addDataToTourHeroes.php';

/*injecting http for getting heroes from client , message service for sending
 log messages every time we do something,spinner services to add spinner service every time we use the api */
  constructor(
    private messageServiceInHeroService: MessageService,
    private http: HttpClient,
    private spinnerService:SpinnerService

  ){}

  httpOptionsPost = {
    headers: new HttpHeaders(
      {
        'content-type':'multipart/form-data'
      }
    )
  }

  getHeroes(): Observable<Hero[]> {
    this.log("going to the http client");
    let fetchedDataFrom: Observable<Hero[]> = this.http.get<Hero[]>(this.heroesUrl);
    this.spinnerService.requestStarted()
    return fetchedDataFrom.pipe(
        catchError(this.handleError<Hero[]>(`getHeroes`, [])),
        tap(_ => this.spinnerService.requestEnded())
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    this.spinnerService.requestStarted()
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      tap(_ => this.spinnerService.requestEnded()),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero).pipe(
      tap(_ => this.log(`updated hero id=${hero.HeroId}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrlPost, hero).pipe(
      tap(_=>console.log("Hero added"))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptionsPost).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  private log(message: string) {
    this.messageServiceInHeroService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = `operation`, result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    };
  }

  // HERO SEARCH METHOD
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found heroes matching "${term}"`) : this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }


}
