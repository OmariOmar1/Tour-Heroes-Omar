import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./heroes/mock-heroes";
import {Observable,of} from "rxjs";
import {MessageService} from "./message.service";


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageServiceinHeroService:MessageService) {
  }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageServiceinHeroService.add(`HeroService: fetched heroes`);
    return heroes;
  }

  //hero details
  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero :Hero = HEROES.find(h => h.id === id)!;
    this.messageServiceinHeroService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }


}


