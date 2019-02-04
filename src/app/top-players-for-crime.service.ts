import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { AppComponent } from './app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class TopPlayersForCrimeService {
  crimeType = 'Theft';
  APIurl:string = `http://NflArrest.com/api/v1/crime/topPlayers/${this.crimeType}`;
  data:any;
  
  constructor(private _http: HttpClient) { 
    this.getTopCrimes();
  }

  //For testing only
  getTopCrimes(): Observable<any> { // Preparing to use an interface with datatypes
    return this._http
    .get(this.APIurl)
  }
}
