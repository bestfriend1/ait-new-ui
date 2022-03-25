import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
@ViewChild('services') services!:ElementRef;
@ViewChild('why') whyUs!:ElementRef;
  slide = false;
  searchBar = false;
  constructor(
  ) { }

  ngOnInit(): void {
  }
  searchBoxShow(){
    this.searchBar =true;
  }
  searchBoxHide(){
    this.searchBar = false;
  }
  
/****** services into scroll */
  servicesScroll(){
    this.services.nativeElement.scrollIntoView({behavior: "smooth"});
  }
  whyUsScroll(){
    this.whyUs.nativeElement.scrollIntoView({behavior: "smooth"});
  }
  slideToggle(){
    this.slide =! this.slide;
    console.log(this.slide);
  }

}
