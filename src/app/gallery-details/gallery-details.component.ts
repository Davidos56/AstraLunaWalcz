import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';
import { Lightbox, IAlbum } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery-details',
  templateUrl: './gallery-details.component.html',
  styleUrls: ['./gallery-details.component.css']
})
export class GalleryDetailsComponent implements OnInit {

  public GalleryName: string;
  public GalleryDate: string;
  public GalleryCity: string;
  private galleryDetaildList : IAlbum[];
  public galleryFirstColumn : IAlbum[] = [];
  public gallerySecondColumn : IAlbum[] = [];
  public galleryThirdColumn : IAlbum[] = [];
  public galleryFourthColumn : IAlbum[]= [];
  public scroll$:any;
  updateSearchResult$: any;
  scrollAndSearch$: any;

  constructor(private route: ActivatedRoute, private service: AppService  , private lightbox:Lightbox)
  {

  }

  ngOnInit()
  {
    let name = this.route.snapshot.paramMap.get('name');
    this.service.getGalleryByName(name).subscribe(x=>
      {
        this.GalleryName = x.fullname;
        this.GalleryDate = x.date;
        this.GalleryCity = x.city;
        this.service.getGalleryDetails(x.dirname).subscribe(y=>
          {
              this.galleryDetaildList = y;
               this.splitByFourColumns(this.galleryDetaildList);
          });
      })
  }

  private splitByFourColumns(gallery: IAlbum[]) {
    gallery.forEach((myObject, index) => {
      if (index % 4 == 0) {
        this.galleryFirstColumn.push(myObject);
        return;
      }
      if (index % 4 == 1) {
        this.gallerySecondColumn.push(myObject);
        return;
      }
      if (index % 4 == 2) {
        this.galleryThirdColumn.push(myObject);
        return;
      }
      if (index % 4 == 3) {
        this.galleryFourthColumn.push(myObject);
        return;
      }
    });
   
  }

}


