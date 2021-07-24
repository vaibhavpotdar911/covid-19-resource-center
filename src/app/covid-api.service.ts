import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(public _http: HttpClient) { }

  public covidWorldwideAPI() {
    return this._http.get("https://disease.sh/v3/covid-19/all");
  }

  public covidCountriesAPI() {
    return this._http.get("https://disease.sh/v3/covid-19/countries");
  }
}
