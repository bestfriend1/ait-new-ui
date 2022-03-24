import { Router, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchBar = false;
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
  searchBox(){
    this.searchBar =! this.searchBar;
  }


}
