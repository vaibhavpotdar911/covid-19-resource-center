import { Component, OnInit } from '@angular/core';
import { faHospital } from '@fortawesome/free-regular-svg-icons';
import { faExclamationTriangle, faPlusSquare, faHeartbeat, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  faHospital = faHospital;
  faExclamationTriangle = faExclamationTriangle;
  faPlusSquare = faPlusSquare;
  faHeartBeat = faHeartbeat;
  faGlobeAsia = faGlobeAsia;
  title = 'Dashboard';
  constructor() { }

  ngOnInit(): void {
  }

}
