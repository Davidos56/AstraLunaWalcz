export interface EventDetails {
    id: number;
    main: EventDetailsMain;
    content: EventContent;
    partners: EventPartners;
}

export interface EventDetailsMain 
{
    name : string;
    place : string;
    date : string;
    street : string;
    background : string;
    first_plan_img: string;
}

export interface EventContent{
    title: string;
    content: string;
    image: string;
}

export interface EventPartners
{
    name: string;
    image: string;
    socialMedia: EventSocialMedia;
}

export interface EventSocialMedia
{
    facebook: string;
    instagram: string;
    twitter: string;
    linkedin: string;
}
