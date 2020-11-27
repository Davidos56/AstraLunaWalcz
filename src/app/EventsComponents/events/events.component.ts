import { Component, OnInit } from '@angular/core';
import { EventItems } from 'src/app/models/eventItem';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public item:EventItems
  constructor() { }

  ngOnInit() {
  }

}
