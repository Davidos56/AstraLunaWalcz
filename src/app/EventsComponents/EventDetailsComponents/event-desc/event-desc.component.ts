import { Component, Input, OnInit } from '@angular/core';
import { EventContent } from 'src/app/interface/event-details';

@Component({
  selector: 'app-event-desc',
  templateUrl: './event-desc.component.html',
  styleUrls: ['./event-desc.component.css']
})
export class EventDescComponent implements OnInit {

  @Input() eventContent: EventContent
  constructor() { }

  ngOnInit() {
  }

}
