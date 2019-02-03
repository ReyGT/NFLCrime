import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopCrimesService } from './top-crimes.service';
import { TopPlayersForCrimeService } from './top-players-for-crime.service';
import { TopTeamsForCrimeService } from './top-teams-for-crime.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TopCrimesService,
    TopPlayersForCrimeService,
    TopTeamsForCrimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
