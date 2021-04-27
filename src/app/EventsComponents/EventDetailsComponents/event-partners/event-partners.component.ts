import { Component, Input, OnInit } from '@angular/core';
import { EventPartners } from 'src/app/interface/event-details';

@Component({
  selector: 'app-event-partners',
  templateUrl: './event-partners.component.html',
  styleUrls: ['./event-partners.component.css']
})
export class EventPartnersComponent implements OnInit {

  @Input() eventPartners: EventPartners
  constructor() { }

  ngOnInit() {
  }

}
