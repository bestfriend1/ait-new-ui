import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  ngOnInit(): void {
    /**
       * Scroll Top 
     */ 
     this.router.events.subscribe((e) =>{
      if(!(e instanceof NavigationEnd)){
        return;
      }
      window.scrollBy(0,0);
    })
  }

}
