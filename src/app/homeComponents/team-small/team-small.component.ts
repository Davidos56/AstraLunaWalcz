import { Component, OnInit } from '@angular/core';
import { ITrainer } from '../../interface/trainersinterface';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-small',
  templateUrl: './team-small.component.html',
  styleUrls: ['./team-small.component.css']
})
export class TeamSmallComponent implements OnInit {

  public trainers:ITrainer[];
  constructor(private service: AppService, private router: Router) 
  {

  }

  ngOnInit() 
  {
    this.service.getTrainersList().subscribe(x=> this.trainers = x);
  }

  public GoToTeam(item)
  {
    this.router.navigate(['/team',item]);
  }
}
