import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }
url = "";
  ngOnInit(): void {
    this.url= this.route.snapshot.params['CurrentRoute'];

  }


  changePageStatus(){
    console.log(this.url);
  }



}

