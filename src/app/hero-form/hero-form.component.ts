import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
 power="";
  powers=['Really smart','Really smart','Really fat','Really Passionate','Really strong','Really fast'];
  model = new Hero(18,'dr Smartyboy',this.powers[0],'chicken tindies');
  submitted=false;
  title: string='';

}
