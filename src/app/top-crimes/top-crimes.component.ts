import { Component, OnInit } from '@angular/core';
import { ITopCrimes } from './topcrimesvaluetypes';
import { TopCrimesService } from '../top-crimes.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.scss']
})
export class TopCrimesComponent implements OnInit {
  //crimes: ITopCrimes[];
  crimes;
  errorMessage: string;

  constructor(private _crimeService: TopCrimesService) {
    //this.getCrimes();
    this.crimes = this.getCrimes();
  }

  ngOnInit() {
    
  }

  getCrimes() {
    this._crimeService.getTopCrimes()
    .subscribe( crimes => this.crimes = crimes );
  }
  

}
