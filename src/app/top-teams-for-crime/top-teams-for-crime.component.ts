import { Component, OnInit } from '@angular/core';
import { TopTeamsForCrimeService } from '../top-teams-for-crime.service';

@Component({
  selector: 'app-top-teams-for-crime',
  templateUrl: './top-teams-for-crime.component.html',
  styleUrls: ['./top-teams-for-crime.component.scss']
})
export class TopTeamsForCrimeComponent implements OnInit {
  crimesForTeams;
  errorMessage: string;

  constructor(private _crimeService: TopTeamsForCrimeService) {
    this.crimesForTeams = this.getCrimes();
  }

  ngOnInit() {
  }

  getCrimes() {
    this._crimeService.getTopCrimes()
    .subscribe( crimesForTeams => this.crimesForTeams = crimesForTeams );
  }
}
