import { Component, OnInit } from '@angular/core';
import { TopPlayersForCrimeService } from '../top-players-for-crime.service';

@Component({
  selector: 'app-top-players-for-crime',
  templateUrl: './top-players-for-crime.component.html',
  styleUrls: ['./top-players-for-crime.component.scss']
})
export class TopPlayersForCrimeComponent implements OnInit {
  crimesForPlayers;
  errorMessage: string;

  constructor(private _crimeService: TopPlayersForCrimeService) {
    this.crimesForPlayers = this.getCrimes();
  }

  ngOnInit() {
  }

  getCrimes() {
    this._crimeService.getTopCrimes()
    .subscribe( crimesForPlayers => this.crimesForPlayers = crimesForPlayers );
  }

}
