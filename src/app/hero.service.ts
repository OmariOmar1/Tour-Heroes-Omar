import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./heroes/mock-heroes";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {
  }
public getHero():Hero[]{
    return HEROES;
}

}


