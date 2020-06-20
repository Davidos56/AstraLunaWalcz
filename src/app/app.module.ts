import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LightboxModule } from 'ngx-lightbox';
import { LazyLoadImageModule , ScrollHooks} from 'ng-lazyload-image';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


 


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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LightboxModule,
    AngularFontAwesomeModule,
    LazyLoadImageModule.forRoot(ScrollHooks),
    CounterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
