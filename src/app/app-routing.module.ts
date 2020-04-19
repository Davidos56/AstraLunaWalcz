import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { TeamComponent } from './team/team.component'
import { OfferComponent } from './offer/offer.component'
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';

const routes: Routes = [
  
  { path: 'home'  ,component: HomeComponent },
  { path: 'offer/:id', component : OfferDetailsComponent},
  { path: 'offer', component : OfferComponent},
  { path: 'team', component : TeamComponent},
  { path: 'gallery',component : GalleryComponent},
  { path: 'gallery/:name', component : GalleryDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
