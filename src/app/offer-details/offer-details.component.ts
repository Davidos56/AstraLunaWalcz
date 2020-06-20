import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { IOfferDetails, IBodyDetails, ICalendarDetails } from '../interface/offerdetailsInterface';
import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.css']
})
export class OfferDetailsComponent implements OnInit {

  public offerId
  public offerDetails :IOfferDetails;
  public offerBody :IBodyDetails[];
  public offerCalendar : ICalendarDetails[];
  public offerImages :IAlbum[];
  public offerName: string;
  constructor(private route: ActivatedRoute, private service: AppService  , private lightbox:Lightbox) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.offerId = id;
    this.service.getOfferById(id)
      .subscribe(arg => {
        this.service.getOfferDetails(arg.path).subscribe(x => {
          this.offerDetails = x;
          this.offerName = x.offerName;
          this.offerBody = x.offerBody;
          this.offerCalendar = x.offerCalendar;
          this.offerImages = x.offerImages;
        });
      });
  }

  open(index: number): void {
    this.lightbox.open(this.offerDetails.offerImages, index);
  }
 
  close(): void {
    this.lightbox.close();
  }
}
