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

}


