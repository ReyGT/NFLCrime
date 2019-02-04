import { Component } from '@angular/core';

import { TopCrimesService } from './top-crimes.service';
import { TopPlayersForCrimeService } from './top-players-for-crime.service';
import { TopTeamsForCrimeService } from './top-teams-for-crime.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NFLCrime';

  //constructor(private _service: TopTeamsForCrimeService){

  //}
}
