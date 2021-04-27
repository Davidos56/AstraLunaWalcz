import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { EventContent, EventDetailsMain, EventPartners } from 'src/app/interface/event-details';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit {

  private id : number
  EventDetailsMain: EventDetailsMain;
  EventContent: EventContent;
  EventPartners: EventPartners;
  showSpinner = true;
  constructor(private service: AppService, private route: ActivatedRoute) { }

  ngOnInit() 
  {
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getEventsDetails(id).subscribe(x=>
      {
        this.id = x.id;
        this.EventDetailsMain = x.main;
        this.EventContent = x.content;
        this.EventPartners = x.partners;
        this.showSpinner = false;
      });
  }

}
