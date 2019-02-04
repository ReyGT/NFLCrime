import { TopCrimesComponent } from './../top-crimes/top-crimes.component';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { TopPlayersForCrimeService } from '../top-players-for-crime.service';

import { Event } from '../classes/event';

@Component({
  selector: 'app-top-players-for-crime',
  templateUrl: './top-players-for-crime.component.html',
  styleUrls: ['./top-players-for-crime.component.scss'],
  inputs:[ 'getCrimesForPlayers' ],
  outputs: [ 'listEvent' ]

})

export class TopPlayersForCrimeComponent implements OnInit {
  crimesForPlayers;
  errorMessage: string;
  crimeCategory;
  catSelected;
  selectedCategory;

  @Input() getCrimesForPlayers: String;
  @Output() listEvent = new EventEmitter<Event>();

  constructor(private _crimeService: TopPlayersForCrimeService) {
    this.crimesForPlayers = this.getCrimes();
  }

  onClick(event: Event): void {
    this.listEvent.emit(event);
  }

  getCrimes() {
    this._crimeService.getTopCrimes()
    .subscribe( crimesForPlayers => this.crimesForPlayers = crimesForPlayers );
  }

  ngOnInit() {
    this.crimesForPlayers = this.getCrimes();
    this.selectedCategory = 'All';
  }

  onChangeCat(newObj) {
    console.log(newObj);
    this.selectedCategory = newObj;
  }



}
