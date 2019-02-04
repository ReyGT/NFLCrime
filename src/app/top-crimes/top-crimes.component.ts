import { Component, OnInit } from '@angular/core';
import { ITopCrimes } from './topcrimesvaluetypes';
import { TopCrimesService } from '../top-crimes.service';
import { Observable } from 'rxjs';
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.scss']
})
export class TopCrimesComponent implements OnInit {
  crimes;
  crimeCategory;
  catSelected;
  selectedCategory;

  constructor(private _crimeService: TopCrimesService) {
  
  }

  ngOnInit() {
    this.crimes = this.getCrimes();
    this.selectedCategory = 'All';
  }

  getCrimes() {
    this._crimeService.getTopCrimes()
    .subscribe( crimes => this.crimes = crimes );
    
  }

  onChangeCat(newObj) {
    console.log(newObj);
    this.selectedCategory = newObj;
  }

  
}