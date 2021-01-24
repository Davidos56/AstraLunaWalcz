import { Component, Input, OnInit } from '@angular/core';
import { EventList } from 'src/app/interface/event-list';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {

  @Input() Event : EventList
  constructor() { }

  ngOnInit() {
  }

}
