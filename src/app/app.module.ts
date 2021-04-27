import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';
import { LazyLoadImageModule } from 'ng-lazyload-image'; // <-- include ScrollHooks
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgxSpinnerModule,  } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgMasonryGridModule } from 'ng-masonry-grid';



 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { OfferComponent } from './offer/offer.component';
import { HttpClientModule } from '@angular/common/http';
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';
import { CounterModule } from 'ngx-counter';
import { WelcomeComponent } from './homeComponents/welcome/welcome.component';
import { CounterComponent } from './homeComponents/counter/counter.component';
import { AboutusComponent } from './homeComponents/aboutus/aboutus.component';
import { TeamSmallComponent } from './homeComponents/team-small/team-small.component';
import { TeamComponent } from './team/team.component';
import { AstraGroupComponent } from './homeComponents/astra-group/astra-group.component';
import { PartnersComponent } from './homeComponents/partners/partners.component';
import { SpinnerloadingComponent } from './spinnerloading/spinnerloading.component';
import { CommunicatesComponent } from './communicates/communicates.component';
import { EventsComponent } from './EventsComponents/events/events.component';
import { EventsDetailsComponent } from './EventsComponents/events-details/events-details.component';
import { BranchComponent } from './branch/branch.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { LazyLoadImgDirective } from './directives/lazy-load-img.directive';
import { EventItemComponent } from './EventsComponents/event-item/event-item.component';
import { MainComponent } from './EventsComponents/EventDetailsComponents/main/main.component';
import { TimeCountComponent } from './EventsComponents/EventDetailsComponents/time-count/time-count.component';
import { EventDescComponent } from './EventsComponents/EventDetailsComponents/event-desc/event-desc.component';
import { EventplanComponent } from './EventsComponents/EventDetailsComponents/eventplan/eventplan.component';
import { EventPartnersComponent } from './EventsComponents/EventDetailsComponents/event-partners/event-partners.component';
import { EventlocalizationComponent } from './EventsComponents/EventDetailsComponents/eventlocalization/eventlocalization.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    OfferComponent,
    OfferDetailsComponent,
    GalleryComponent,
    GalleryDetailsComponent,
    WelcomeComponent,
    CounterComponent,
    AboutusComponent,
    TeamSmallComponent,
    TeamComponent,
    AstraGroupComponent,
    PartnersComponent,
    SpinnerloadingComponent,
    CommunicatesComponent,
    EventsComponent,
    EventsDetailsComponent,
    BranchComponent,
    BranchDetailsComponent,
    LazyLoadImgDirective,
    EventItemComponent,
    MainComponent,
    TimeCountComponent,
    EventDescComponent,
    EventplanComponent,
    EventPartnersComponent,
    EventlocalizationComponent,    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LightboxModule,
    AngularFontAwesomeModule,
    LazyLoadImageModule,
    NgxMasonryModule,
    NgMasonryGridModule,
    CounterModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
