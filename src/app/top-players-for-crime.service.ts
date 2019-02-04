import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { TopPlayersForCrimeComponent } from './top-players-for-crime/top-players-for-crime.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class TopPlayersForCrimeService {
  crimeType = 'Sex';
  //crimeType = TopPlayersForCrimeComponent.listEvent;
  APIurl:string = `http://NflArrest.com/api/v1/crime/topPlayers/${this.crimeType}`;
  data:any;
  
  constructor(private _http: HttpClient) { 
    this.getTopCrimes();
  }

  getTopCrimes(): Observable<any> {
    return this._http
    .get(this.APIurl)
  }
}
