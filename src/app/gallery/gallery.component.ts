import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { IGalleryList } from '../interface/galleryinterface';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  public gallery:IGalleryList[];
  public showSpinner:boolean;
  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
    this.showSpinner = true;
    this.service.getGalleryList().subscribe(x=> {
     this.gallery = x;
      this.showSpinner = false;
    });
  }

  onSelect(gallery)
  {
    this.router.navigate(['/gallery',gallery.dirname]);
  }
}
