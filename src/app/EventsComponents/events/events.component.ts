import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { EventList } from 'src/app/interface/event-list';
import { EventItems } from 'src/app/models/eventItem';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public items:EventList[]
  showSpinner = true;
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() 
  {
    this.service.getEventsList().subscribe(x=> {this.items = x;
      this.showSpinner = false});

  }

  onSelect(event)
  {
    this.router.navigate(['/events',event.id]);
  }

}
