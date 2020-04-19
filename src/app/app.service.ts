import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//offer
import { Offer } from './models/offerModel'
import { OFFERS } from './mock/offer-mock'
import { IOffer } from './interface/offerInterface'
import { Observable } from 'rxjs';
import { find ,map, pluck } from 'rxjs/operators';
import { IOfferDetails } from './interface/offerdetailsInterface';
import { IGalleryList } from './interface/galleryinterface';
import { IGalleryDetailsList } from './interface/gallerydetailsInterface';
import { IAlbum } from 'ngx-lightbox';
import { ITrainer } from './interface/trainersinterface';


@Injectable({
  providedIn: 'root'
})
export class AppService {

 
  public Offer:Observable<IOffer[]>
  public OfferDetail:Observable<IOfferDetails>;
 
  constructor(private http: HttpClient) 
  { 
    
  }
  configUrl = './././assets/json/offerList.json';

  galleryDebugUrl = 'http://localhost:80/astraLunaWalcz/scripts/getGalleryList.php'
  galleryURL = './././scripts/getGalleryList.php';
  galleryDetailsURL = './././scripts/getPhotosList.php?name=';
  trainersList = './././assets/json/trainerList.json'


  getoffer(): Observable<IOffer[]>
  {
    return this.http.get<IOffer[]>(this.configUrl)
  }

  getOfferById(id): Observable<IOffer> {
    return  this.getoffer().pipe(map(x=> x.find(y=>y.id == id)));
  }

  getOfferDetails(path): Observable<IOfferDetails>
  {
    return this.http.get<IOfferDetails>(path)
  }

  getGalleryList() : Observable<IGalleryList[]>
  {
    return this.http.get<IGalleryList[]>(this.galleryDebugUrl);
  }

  getGalleryByName(name) : Observable<IGalleryList>
  {
    return this.getGalleryList().pipe(map(x=> x.find(y=>y.dirname == name)));
  }

  getGalleryDetails(path) : Observable<IAlbum[]>
  {
    return this.http.get<IAlbum[]>(this.galleryDetailsURL + path)
  }
  getTrainersList() : Observable<ITrainer[]>
  {
    return this.http.get<ITrainer[]>(this.trainersList);
  }
}
