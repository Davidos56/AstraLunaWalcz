import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { IPartners } from 'src/app/interface/partners';

declare var $: any;
@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  public partners: IPartners[];
  constructor(private service: AppService) { }

  ngOnInit() {
    this.service.getPartnersList().subscribe(x => {
      this.partners = x;
      $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
          items: 4,
          loop: true,
          margin: 10,
          autoplay: true,
          autoplayTimeout: 3000,
          autoplayHoverPause: true,
          responsiveClass: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            900: {
              items: 3,
            },
            1200: {
              items: 4,
            }
          }
        });
      });
    });
  }
}

