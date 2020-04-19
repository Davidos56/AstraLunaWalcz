import { Component, OnInit } from '@angular/core';
import { ITrainer } from '../../interface/trainersinterface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-team-small',
  templateUrl: './team-small.component.html',
  styleUrls: ['./team-small.component.css']
})
export class TeamSmallComponent implements OnInit {

  public trainers:ITrainer[];
  constructor(private service: AppService) 
  {

   }

  ngOnInit() 
  {
    this.service.getTrainersList().subscribe(x=> this.trainers = x);
  }

}
