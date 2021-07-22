import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaccination',
  templateUrl: './vaccination.component.html',
  styleUrls: ['./vaccination.component.css']
})
export class VaccinationComponent implements OnInit {
  title = 'Vaccination';
  constructor() { }

  ngOnInit(): void {
  }

}
