import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchBar = false;
  constructor() { }

  ngOnInit(): void {
  }
  searchBox(){
    this.searchBar =! this.searchBar;
  }

}
