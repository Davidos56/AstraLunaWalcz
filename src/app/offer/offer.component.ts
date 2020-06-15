import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Router, NavigationExtras } from '@angular/router';
import { IOffer } from '../interface/offerInterface';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  public offers : IOffer[];
  @Input() numbersOfOffers:number;
  @Input() isShadow:boolean;

  constructor( private service: AppService, private router: Router) { }

  ngOnInit() 
  {  
    if(this.numbersOfOffers == 0)
    {
      this.service.getoffer().subscribe(x=>this.offers = x);
    } 
    else
    {
      this.service.getoffer().subscribe(x=>this.offers = x.slice(0,this.numbersOfOffers));
    }
  }

  onSelect(offer)
  {
    this.router.navigate(['/offer',offer.id], {state:{offer}});
  }
}
