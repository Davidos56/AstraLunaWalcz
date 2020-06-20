import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ITrainer } from '../interface/trainersinterface';
import { AppService } from 'src/app/app.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit
{
 
  public trainers: ITrainer[];
  private trainerId: string;
  private tempTrainer: string;
  isodd = true;
  public elem
  constructor(private route: ActivatedRoute, private service: AppService) 
  {
    this.trainerId = this.route.snapshot.paramMap.get('id');
  }  
  ngOnInit() 
  {
    this.service.getTrainersList().subscribe(x => 
      {
        this.trainers = x;
        console.log(this.trainers);
      });
  }


  public get changeOdd(){
    this.isodd = !this.isodd;
    return this.isodd;
  }
}
