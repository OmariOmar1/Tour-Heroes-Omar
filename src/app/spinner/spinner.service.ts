import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {
private count = 0;
private spinner$ = new BehaviorSubject<string>('')

  constructor() { }

  getSpinnerObserver(): Observable<string>{
  return this.spinner$.asObservable()
}

  requestStarted(){
  this.spinner$.next('start')
}

requestEnded() {
    this.spinner$.next('stop');
}
// in case any errors that happen in the fututre with the reset spinner
resetSpinner(){
  this.count=0;
  this.spinner$.next('stop')
}
}




