import { Component, OnInit } from '@angular/core';
import { faSyringe, faUsers, faGlobe, faUserClock, faUserCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {
  title = 'Vaccination';
  faSyringe = faSyringe;
  faUsers = faUsers;
  faGlobe = faGlobe;
  faUserClock = faUserClock;
  faUserCheck = faUserCheck;
  constructor() { }

  ngOnInit(): void {
  }

}
