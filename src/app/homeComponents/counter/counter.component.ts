import { Component, OnInit, HostListener } from '@angular/core';
import counterUp from 'counterup2';
import { ViewportScroller } from '@angular/common';

declare var $: any;
declare const Waypoint: any;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor(viewportScroller: ViewportScroller) { }

  ngOnInit() 
  {

    const el1 = document.querySelector('.counter1')
    const el2 = document.querySelector('.counter2')
    const el3 = document.querySelector('.counter3')

    // Start counting, do this on DOM ready or with Waypoints.
    new Waypoint({
      element: el1,
      handler: function () {
        counterUp(el1, {
          duration: 3000,
          delay: 40,
        });
        this.destroy()
      },
      offset: 'bottom-in-view',
    });
    new Waypoint({
      element: el2,
      handler: function () {
        counterUp(el2, {
          duration: 3000,
          delay: 40,
        });
        this.destroy()
      },
      offset: 'bottom-in-view',
    });
    new Waypoint({
      element: el3,
      handler: function () {
        counterUp(el3, {
          duration: 3000,
          delay: 40,
        });
        this.destroy()
      },
      offset: 'bottom-in-view',
    });
  }
}


