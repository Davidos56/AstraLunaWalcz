import { Component, OnInit ,Input} from '@angular/core';
import { EventDetails } from 'src/app/interface/event-details';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() EventDetailsMain: EventDetails;
  constructor() { }

  ngOnInit() 
  {
    
  }

}
