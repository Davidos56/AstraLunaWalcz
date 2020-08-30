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

  public offerComments :IBodyDetails;
  public offerName: string;
  public showComments: boolean;
  public showCalendar: boolean;
  public showSpinner:boolean = false;
  constructor(private route: ActivatedRoute, private service: AppService  , private lightbox:Lightbox) { }

  ngOnInit() 
  {
    this.showSpinner = true;
    let id = this.route.snapshot.paramMap.get('id');
    this.offerId = id;
    this.service.getOfferDetails(id)
      .subscribe(x => {
          this.offerDetails = x;
          this.offerName = x.offerName;
          this.offerComments = x.offerComments;
          this.showComments = this.offerComments.content != "";
          this.offerBody = x.offerBody;

          this.offerCalendar = x.offerCalendar;
          this.showCalendar = x.offerCalendar.length != 0;
          this.offerImages = x.offerImages;
          console.log(this.offerImages);
          this.showSpinner = false;
      });
  }

}
