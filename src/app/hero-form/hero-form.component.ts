import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
submitMessage: any|NgForm =""
  submitted = false;

  onSubmit() { this.submitted = true; }
  constructor() { }

  ngOnInit(): void {

  }
message: string =""
myage=""
  send(messageFromForm:string){

    if (!isNaN(Number(messageFromForm))) {
      this.message = `hello and welcome to the first Story for your hero we have noticed that you are ${messageFromForm} years old what a great age to be in this day and age \n `;
    }
    else {
      this.message = `hello and welcome to the first Story for your hero we have noticed that you are  ...... hold on that is not a number!  \n\n you have lost the game `;
    }



  }

}


