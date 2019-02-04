import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { AppComponent } from './app.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ITopCrimes } from './top-crimes/topcrimesvaluetypes';


@Injectable({
  providedIn: 'root'
})
export class TopCrimesService {
  APIurl:string = 'http://NflArrest.com/api/v1/crime';
  data:any;
  crimes = new Array;
  
  constructor(private _http: HttpClient) { 
    this.getTopCrimes();
  }

    getTopCrimes(): Observable<any> { 
      return this._http
      .get(this.APIurl)
  }

}
