import { Component,OnInit } from '@angular/core';
import * as AOS from 'aos';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  ngOnInit() 
  {
    AOS.init({
      once: true
    });
   
   
  }
}
