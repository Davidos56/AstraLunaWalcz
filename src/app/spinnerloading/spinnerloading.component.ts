import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart,Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-spinnerloading',
  templateUrl: './spinnerloading.component.html',
  styleUrls: ['./spinnerloading.component.css']
})
export class SpinnerloadingComponent implements OnInit {
  public showSpinner:Boolean = true
  constructor(private router:Router) 
  {
    this.router.events.subscribe((routeEvent : Event) =>
    {
      if(routeEvent instanceof NavigationStart)
      {
        this.showSpinner = true;
      }

      if(routeEvent instanceof NavigationEnd)
      {
        this.showSpinner = false;
      }
    });

   }

  ngOnInit() {
  }

}
