import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Lightbox, IAlbum } from 'ngx-lightbox';
import * as Masonry from 'masonry-layout';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css'],
})
export class GalleryDetailsComponent implements OnInit, AfterViewInit {

  public GalleryName: string;
  public GalleryDate: string;
  public GalleryCity: string;
  public galleryDetailsList: IAlbum[];
  public galleryDetailsList1: IAlbum[] = [];
  public galleryDetailsList2: IAlbum[] = [];
  public galleryDetailsList3: IAlbum[] = [];
  public galleryDetailsList4: IAlbum[] = [];
  public showSpinner: boolean;
  public scroll$: any;
  updateSearchResult$: any;
  scrollAndSearch$: any;
  defaultImage = 'https://www.placecage.com/1000/1000';

  constructor(private route: ActivatedRoute, private service: AppService, private lightbox: Lightbox) {
  }
  ngAfterViewInit(): void {
   
  }

  onSelect(index)
  {
    this.lightbox.open(this.galleryDetailsList,index);
  }
  
  close(): void {
    this.lightbox.close();
  }

  ngOnInit() {
    this.showSpinner = true;
    let name = this.route.snapshot.paramMap.get('name');
    this.service.getGalleryByName(name).subscribe(x => {
      this.GalleryName = x.fullname;
      this.GalleryDate = x.date;
      this.GalleryCity = x.city;
      this.service.getGalleryDetails(x.id).subscribe(y => {
        this.galleryDetailsList = y;
        console.log(this.galleryDetailsList.length);
        this.showSpinner = false;
      });
    })
  }
}