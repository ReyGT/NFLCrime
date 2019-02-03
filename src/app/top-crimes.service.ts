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
export class TopCrimesService {
  APIurl:string = 'http://NflArrest.com/api/v1/crime';
  data:any;
  
  constructor(private _http: HttpClient) { 
    this.getTopCrimes();
    this.getData();
  }

  //For testing only
  getData() {
    return this._http.get(this.APIurl)
  }
  getTopCrimes() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    })
  }

//To use with Observable and an Interface
  //getTopCrimes(){ // Preparing to use an interface with datatypes
    //getTopCrimes(): Observable<INFLCrime[]> { // Preparing to use an interface with datatypes
     // return this._http
      //.get(this.APIurl)
      //.map((res: Response) => res.json());

      //.map((res: Response) => <IProduct>res.json());
    
  //}

}
