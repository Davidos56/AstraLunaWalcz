import { Component, OnInit, Input } from '@angular/core';
import { AppService } from '../app.service';
import { Router, } from '@angular/router';
import { IOffer } from '../interface/offerInterface';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  public offers: IOffer[];
  @Input() numbersOfOffers: number;
  @Input() isShadow: boolean = false;
  @Input() onFront: boolean = false;
  public showSpinner: boolean = false;

  constructor(private service: AppService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.showSpinner = true;
    if (this.numbersOfOffers == 0) {
      this.service.getoffer().subscribe(x => {
        this.offers = x;
        this.showSpinner = false;
      });
    }
    else {
      this.service.getoffer().subscribe(x => {
        this.offers = x.slice(0, this.numbersOfOffers);
        this.showSpinner = false;
      });
    }
  }

  onSelect(offer) {
    this.router.navigate(['/offer', offer.id], { state: { offer } });
  }
}
