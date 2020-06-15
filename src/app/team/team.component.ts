import { Component, OnInit, AfterViewChecked, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { ITrainer } from '../interface/trainersinterface';
import { AppService } from 'src/app/app.service';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';


declare var $: any;

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit , AfterViewChecked ,  AfterViewInit
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

  ngAfterViewInit()
  {
    
  }
  ngAfterViewChecked(): void {
    if (this.route.snapshot.paramMap.get('id') != null) {
      if (this.tempTrainer !== this.trainerId) {
        let temp = document.getElementById(this.trainerId);
        if (temp != null) {
          this.tempTrainer = this.trainerId;
          temp.scrollIntoView();
          console.log(temp);
        }
      }
    }
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
