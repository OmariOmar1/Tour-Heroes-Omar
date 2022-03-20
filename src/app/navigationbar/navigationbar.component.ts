import {Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})

export class NavigationbarComponent implements OnInit {
  public currentPage=""
  public event$
  public isMenuShowing$: boolean=false

  constructor(private location: Location){
      this.event$=location.onUrlChange((val) => {
      this.currentPage=val.toString()})
  }

  toggleShowMenu(){
    this.isMenuShowing$=(!this.isMenuShowing$)
  }

  ngOnInit(): void {}
}


