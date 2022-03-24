import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date = new Date();
  year = this.date.getFullYear();
  bgChange = false;
  
  constructor(
    private router :Router
  ) { }

  ngOnInit(): void {
    this.routerControll();
  }


  /***  router Controll*/
  routerControll(){
    this.router.events.subscribe((e) =>{
      if(this.router.url == "/get-in-touch"){
        this.bgChange = true;
      }else{
        this.bgChange = false;
      }
    });
    /*** bowser load */
    if(this.router.url == "/get-in-touch"){
      this.bgChange = true;
    }else{
      this.bgChange = false;
    }
  }

}
