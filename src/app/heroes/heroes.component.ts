import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
    if(!Object.keys(this.heroes).length){
      console.log("no data found");
    }
  }

  add(HeroFirstName: string): void {
    HeroFirstName = HeroFirstName.trim();
    this.heroService.addHero( {HeroFirstName} as Hero)
      .subscribe(hero => {this.heroes.push({HeroFirstName} as Hero);
      });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
    console.log(this.heroes);
  }

  delete(hero: Hero): void {
    window.alert("Are you sure you Want to delete Hero?")
    this.heroes = this.heroes.filter(h => h !== hero);
    console.log(this.heroes);
    this.heroService.deleteHero(hero.HeroId).subscribe();
  }
}

