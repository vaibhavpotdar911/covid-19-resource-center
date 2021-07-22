import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(public _http: HttpClient) { }

  public covidAPI() {
    return this._http.get("https://corona-api.com/timeline");
  }
}
