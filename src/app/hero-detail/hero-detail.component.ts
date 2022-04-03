import { Component, OnInit,Input } from '@angular/core';
import {Hero} from "../hero";
import { ActivatedRoute } from '@angular/router';
import {Location} from "@angular/common";
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // child component property
  @Input() hero: Hero=new Hero(-1,'','');

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location:Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
// TODO: FIX THIS
  getHero(): void {
    //get the id from the browser link
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.heroService.getHero(id)
      .subscribe(hero => {
        console.log("herooooo", hero)
        this.hero = hero;
      });
  }

  goBack(){
    this.location.back();
  }

  save(){
    if(this.hero){
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack())
    }
  }

}
