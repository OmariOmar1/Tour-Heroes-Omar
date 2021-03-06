import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from "./app-routing.module";
import { HttpClientModule} from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {InMemoryDataService} from "./in-memory-data.service";
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    NavigationbarComponent,
    HeroFormComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false },
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
