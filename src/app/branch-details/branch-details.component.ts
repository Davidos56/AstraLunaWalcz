import { Component, OnInit } from '@angular/core';
import { ICalendarDetails, IBranchDetails, IBranchCalendarDetails } from '../interface/offerdetailsInterface';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-branch-details',
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.css']
})
export class BranchDetailsComponent implements OnInit {
  public showSpinner:boolean = false;
  public branchCalendar : IBranchCalendarDetails[];
  public branchName : string;
  
  constructor(private route: ActivatedRoute, private service: AppService) { }

  ngOnInit() 
  {
    this.showSpinner = true;
    let id = this.route.snapshot.paramMap.get('id');
    this.service.getbranch(id).subscribe(x=>
      {
        
        this.branchCalendar = x.schedule;
        this.branchName = x.name;
        this.showSpinner = false;
      })
  }

  getColor(group) {
    switch (group) {
      case 'Grupa zaawansowana':
        return 'blue';
      case 'Nowy Nabór':
        return 'red';
      case 'Sport':
        return 'green';
    }
  }

}
