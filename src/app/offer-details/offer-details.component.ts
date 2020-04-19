import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { IOfferDetails } from '../interface/offerdetailsInterface';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  public offerId
  public offerDetails :IOfferDetails;
  constructor(private route: ActivatedRoute, private service: AppService  , private lightbox:Lightbox) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.offerId = id;
    this.service.getOfferById(id)
      .subscribe(arg => {
        this.service.getOfferDetails(arg.path).subscribe(x => {
          this.offerDetails = x;
        });
      });
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.offerDetails.offerImages, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
}
