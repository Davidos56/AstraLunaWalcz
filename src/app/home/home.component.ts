import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit , OnDestroy {
  constructor() {
  }
  ngOnDestroy(): void {
    $.stellar("destroy");
  }
  ngAfterViewInit(): void {
   
  }

  ngOnInit() 
  {
    $(window).stellar({
      horizontalScrolling: false,
      verticalOffset: 0
  });
  }
}
