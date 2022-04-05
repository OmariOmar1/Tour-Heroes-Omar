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

  add(HeroFirstName: string,HeroDescription: string): void {
    HeroFirstName = HeroFirstName.trim();
    HeroDescription=HeroDescription.trim();
    const HeroId = 99;
    this.heroService.addHero( {HeroFirstName,HeroDescription} as Hero)
      .subscribe(_ => {this.heroes.push({HeroId, HeroFirstName,HeroDescription} as Hero);
      });
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  delete(hero: Hero): void {
    window.alert("Are you sure you Want to delete Hero?")
    this.heroService.deleteHero(hero.HeroId).subscribe(response => {
      if(response){
        this.heroes = this.heroes.filter(h => h !== hero);
      }
    });
  }
}

