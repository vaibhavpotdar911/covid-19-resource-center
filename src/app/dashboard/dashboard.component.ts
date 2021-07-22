import { Component, OnInit } from '@angular/core';
import { faHospital, faExclamationTriangle, faPlusSquare, faHeartbeat, faGlobeAsia, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { CovidApiService } from '../covid-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //FontAwesome Icons
  faHospital = faHospital;
  faExclamationTriangle = faExclamationTriangle;
  faPlusSquare = faPlusSquare;
  faHeartBeat = faHeartbeat;
  faGlobeAsia = faGlobeAsia;
  faArrowUp = faArrowUp;

  title = 'Dashboard';
  apiData: any;

  confirmed: any;
  active: any;
  recovered: any;
  deaths:any;
  new_confirmed: any;
  new_recovered: any;
  new_deaths: any;

  constructor(private covid19Api: CovidApiService) { }

  ngOnInit() {
    this.covid19Api.covidAPI().subscribe((result) => {
      this.apiData = result;
      //console.log(this.apiData.data[0].active);
      this.confirmed = this.apiData.data[0].confirmed.toLocaleString("en-US");
      //console.log(this.confirmed);
      this.active = this.apiData.data[0].active.toLocaleString("en-US");
      this.recovered = this.apiData.data[0].recovered.toLocaleString("en-US");
      this.deaths = this.apiData.data[0].deaths.toLocaleString("en-US");

      this.new_confirmed = this.apiData.data[0].new_confirmed.toLocaleString("en-US");
      this.new_recovered = this.apiData.data[0].new_recovered.toLocaleString("en-US");
      this.new_deaths = this.apiData.data[0].new_deaths.toLocaleString("en-US");

    })
  }

}
