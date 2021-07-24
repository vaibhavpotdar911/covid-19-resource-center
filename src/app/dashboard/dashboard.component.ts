import { Component, OnInit } from '@angular/core';
import { faHospital,
   faExclamationTriangle,
   faPlusSquare,
   faHeartbeat,
   faGlobeAsia,
   faArrowUp,
   faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import { CovidApiService } from '../covid-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';

  //FontAwesome Icons
  faHospital = faHospital;
  faExclamationTriangle = faExclamationTriangle;
  faPlusSquare = faPlusSquare;
  faHeartBeat = faHeartbeat;
  faGlobeAsia = faGlobeAsia;
  faArrowUp = faArrowUp;
  faFlag = faFlag;
  faChevronUp = faChevronUp;

  //Objects with dynamic Data
  apiCountryData: any;
  apiWorldwideData: any;

  //Local variables used to display data on webpage and to increase ease of access
  confirmed: any;
  active: any;
  recovered: any;
  deaths:any;
  new_confirmed: any;
  new_recovered: any;
  new_deaths: any;

  //Percentage declaratations
  activePercentage: any;
  length: any;

  constructor(private covid19Api: CovidApiService) { }

  ngOnInit() {
    this.covid19Api.covidWorldwideAPI().subscribe((result) => {
      this.apiWorldwideData = result;
      this.confirmed = this.apiWorldwideData.cases.toLocaleString("hi-IN");
      this.active = this.apiWorldwideData.active.toLocaleString("hi-IN");
      this.recovered = this.apiWorldwideData.recovered.toLocaleString("hi-IN");
      this.deaths = this.apiWorldwideData.deaths.toLocaleString("hi-IN");

      this.new_confirmed = this.apiWorldwideData.todayCases.toLocaleString("hi-IN");
      this.new_recovered = this.apiWorldwideData.todayRecovered.toLocaleString("hi-IN");
      this.new_deaths = this.apiWorldwideData.todayDeaths.toLocaleString("hi-IN");
    });

    this.covid19Api.covidCountriesAPI().subscribe((result) => {
      this.apiCountryData = result;
      /*console.log(this.apiCountryData);
      this.length = Object.keys(this.apiCountryData).length;
      console.log(this.length);
      this.activePercentage = (this.apiCountryData.active/this.apiCountryData.cases)*100;
      console.log(this.activePercentage)*/
    })
  }
  //Pagination default number
  p: number =1;

  filter:any;

  key: any = 'name'; //set default
  reverse: boolean = false;
  sort(key: any){
    this.key = key;
    this.reverse = !this.reverse;
  }
}
