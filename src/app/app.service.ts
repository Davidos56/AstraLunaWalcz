import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//offer
import { Offer } from './models/offerModel'
import { OFFERS } from './mock/offer-mock'
import { IOffer } from './interface/offerInterface'
import { Observable, ObservedValueOf, pipe } from 'rxjs';
import { find ,map, pluck } from 'rxjs/operators';
import { IOfferDetails, ICalendarDetails, IBranchDetails } from './interface/offerdetailsInterface';
import { IGalleryList } from './interface/galleryinterface';
import { IGalleryDetailsList } from './interface/gallerydetailsInterface';
import { IAlbum } from 'ngx-lightbox';
import { ITrainer } from './interface/trainersinterface';
import { IPartners } from './interface/partners';
import { IMessages } from './interface/Imessages';
import { IBranchList } from './interface/IBranch';
import { EventList } from './interface/event-list';
import { EventDetails } from './interface/event-details';


@Injectable({
  providedIn: 'root'
})


export class AppService {

 
  public Offer:Observable<IOffer[]>
  public OfferDetail:Observable<IOfferDetails>;
  gallery :IGalleryList[]
 
  constructor(private http: HttpClient) 
  { 
    
  }

  messagesUrl ="http://astraluna.pl/AstraLunaAdminPage/wp-json/alw/v1/messages";
  configUrl = 'http://astraluna.pl/AstraLunaAdminPage/wp-json/alw/v1/offersList';
  offerDetailsUrl = 'http://astraluna.pl/AstraLunaAdminPage/wp-json/alw/v1/getOffersDetails/';
  branchesURL = 'http://astraluna.pl/AstraLunaAdminPage/wp-json/alw/v1/getBranches';
  branchDetailsURL = 'http://astraluna.pl/AstraLunaAdminPage/wp-json/alw/v1/getBranchById/';
  galleryURL = 'http://astraluna.pl/AstraLunaAdminPage/wp-json/alw/v1/getGallery/';
  galleryDetailsURL = 'http://astraluna.pl/AstraLunaAdminPage/wp-json/alw/v1/getGalleryByName/';
  eventsURL='http://astraluna.pl/AstraLunaAdminPage/wp-json/alw/v1/getEvents/';
  eventsDetailsURL='http://localhost/AstraLunaWalczPage/api/wp-json/alw/v1/getEventByID/';
  trainersList = './././assets/json/trainerList.json'
  partnersList = './././assets/json/partners.json'

  private env:Enviroment = Enviroment.Dev;
  getoffer(): Observable<IOffer[]>
  {
    return this.http.get<IOffer[]>(this.configUrl)
  }

  getbranches(): Observable<IBranchList[]>
  {
    return this.http.get<IBranchList[]>(this.branchesURL)
  }

  getbranch(id): Observable<IBranchDetails>
  {
    return this.http.get<IBranchDetails>(this.branchDetailsURL + id)
  }

  getOfferDetails(id): Observable<IOfferDetails>
  {
    return this.http.get<IOfferDetails>(this.offerDetailsUrl+ id);
  }

  getGalleryList() : Observable<IGalleryList[]>
  {
    return this.http.get<IGalleryList[]>(this.galleryURL);
  }

  getGalleryByName(name) : Observable<IGalleryList>
  {
    return this.getGalleryList().pipe(map(x=> x.find(y=>y.dirname == name)));
  }

  getGalleryDetails(id) : Observable<IAlbum[]>
  {
    return this.http.get<IAlbum[]>(this.galleryDetailsURL+id)
  }
  getTrainersList() : Observable<ITrainer[]>
  {
    return this.http.get<ITrainer[]>(this.trainersList);
  }

  getPartnersList() : Observable<IPartners[]>
  {
    return this.http.get<IPartners[]>(this.partnersList);
  }

  getMessages() :Observable<IMessages[]>
  {
    return this.http.get<IMessages[]>(this.messagesUrl);
  }

  getEventsList() :Observable<EventList[]>
  {
    return this.http.get<EventList[]>(this.eventsURL);
  }
  getEventsDetails(id): Observable<EventDetails>{
    return this.http.get<EventDetails>(this.eventsDetailsURL + id)
  }




  private GetGallery(enviroment: Enviroment): string {
    switch (enviroment) {
      case Enviroment.Dev:
        return "./././assets/json/gallery/galleryList.json";
      case Enviroment.Prod:
        return "./././scripts/getGalleryList.php";
    }
  }

  private GetGalleryDetails(enviroment: Enviroment, path:string): string {
    switch (enviroment) {
      case Enviroment.Dev:
        return "./././assets/json/gallery/getPhotosList_"+path+".json";
      case Enviroment.Prod:
        return "./././scripts/getPhotosList.php?name="+ path;
    }
  }
}

export enum Enviroment 
{
  Prod = 0,
  Dev = 1
}
