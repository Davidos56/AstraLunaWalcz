import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Lightbox, IAlbum } from 'ngx-lightbox';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent implements OnInit {

  public myOptions: NgxMasonryOptions = 
  {
    transitionDuration: '0.2s',
		gutter: 20,
		resize: true,
		initLayout: true,
		fitWidth: true
    
  }
  public galleryDetaildList : IAlbum[];
  constructor(private route: ActivatedRoute, private service: AppService  , private lightbox:Lightbox) { }

  ngOnInit() {

    let name = this.route.snapshot.paramMap.get('name');
    this.service.getGalleryByName(name).subscribe(x=>
      {
        this.service.getGalleryDetails(x.dirname).subscribe(y=>
          {
              this.galleryDetaildList = y;
              console.log(this.galleryDetaildList);
          });
      })
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.galleryDetaildList, index);
  }
 
  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }
}
