import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { IBranchList } from '../interface/IBranch';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit 
{
  public branches: IBranchList[];
  public showSpinner: boolean = false;
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() 
  {
    this.showSpinner = true;
    this.service.getbranches().subscribe(x=> {this.branches = x; this.showSpinner = false});

  }

  onSelect(branch) {
    this.router.navigate(['/branch', branch.branch], { state: { branch } });
  }

}
