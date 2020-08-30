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
    date:Date;
    head:string;
    content:string;
}

export interface IBranchDetails
{
    name: string;
    schedule: IBranchCalendarDetails[];
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

export interface IBranchCalendarDetails
{
    time:string;
    monday: IBranchDay[];
    tuesday:IBranchDay[];	
    wednesday:IBranchDay[];	
    thursday:IBranchDay[];	
    friday:IBranchDay[];
}

export interface IBranchDay
{
    name: string;
    group: string;
    adress: string;
}