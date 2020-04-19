import { Component, OnInit } from '@angular/core';
import { ITrainer } from '../interface/trainersinterface';
import { AppService } from 'src/app/app.service';

declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public trainers: ITrainer[];
  isodd = false;
  constructor(private service: AppService) {

  }

  ngOnInit() 
  {
    this.service.getTrainersList().subscribe(x => this.trainers = x);
  }
  public get changeOdd(){
    this.isodd = !this.isodd;
    return this.isodd;
  }
}
