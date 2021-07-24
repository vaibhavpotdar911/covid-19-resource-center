import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = function() {scrollFunction()};
    
  }
}
function scrollFunction() {
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("header-back").style.background = "rgba(26,32,44,1)";
  }
}

