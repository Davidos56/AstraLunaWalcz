import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { IBodyDetails } from '../interface/offerdetailsInterface';
import { IOffer } from '../interface/offerInterface';
import { IMessages } from '../interface/Imessages';

@Component({
  selector: 'app-communicates',
  templateUrl: './communicates.component.html',
  styleUrls: ['./communicates.component.css']
})
export class CommunicatesComponent implements OnInit {

  public messages :IMessages[];
  public showSpinner:boolean = false;
  @Input() numbersOfMessages:number;
  @Input() isShadow:boolean = false;
  @Input() onFront:boolean = false;
  constructor( private service: AppService) { }

  ngOnInit() 
  {
    this.showSpinner = true;
    this.service.getMessages().subscribe(x=>
      {
        this.messages = x;
        this.showSpinner = false;
      });
  }
}
