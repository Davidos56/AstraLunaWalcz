import { IAlbum } from 'ngx-lightbox';

export interface IOfferDetails
{
    offerName: string;
    offerBody: IBodyDetails[];
    offerComments:IBodyDetails;
    offerCalendar:ICalendarDetails[];
    offerImages: IAlbum[]; 
}

export interface IBodyDetails
{
    head:string;
    content:string;
}

export interface ICalendarDetails
{
    time:string;
    monday: string;
    tuesday:string;	
    wednesday:string;	
    thursday:string;	
    friday:string;
    adress:string;
}