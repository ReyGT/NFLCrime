import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import { TopTeamsForCrimeComponent } from './top-teams-for-crime/top-teams-for-crime.component';
import { TopPlayersForCrimeComponent } from './top-players-for-crime/top-players-for-crime.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { TopCrimesService } from './top-crimes.service';
import { TopPlayersForCrimeService } from './top-players-for-crime.service';
import { TopTeamsForCrimeService } from './top-teams-for-crime.service';

const routes: Routes = [
  { path: 'top-crimes', component: TopCrimesComponent},
  { path: 'top-players-for-crime', component: TopPlayersForCrimeComponent},
  { path: 'top-teams-for-crime', component: TopTeamsForCrimeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopTeamsForCrimeComponent,
    TopPlayersForCrimeComponent,
    NavbarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    //NgModule,
    RouterModule.forRoot(routes),
    //RouterModule
  ],
  providers: [
    TopCrimesService,
    TopPlayersForCrimeService,
    TopTeamsForCrimeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
