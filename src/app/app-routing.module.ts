import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { TeamComponent } from './team/team.component'
import { EventsComponent } from './EventsComponents/events/events.component'
import { OfferComponent } from './offer/offer.component'
import { OfferDetailsComponent } from './offer-details/offer-details.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDetailsComponent } from './gallery-details/gallery-details.component';
import { CommunicatesComponent } from './communicates/communicates.component';
import { BranchComponent } from './branch/branch.component';
import { BranchDetailsComponent } from './branch-details/branch-details.component';
import { EventsDetailsComponent } from './EventsComponents/events-details/events-details.component';

const routes: Routes = [

  { path: 'offer/:id', component : OfferDetailsComponent},
  { path: 'offer', component : OfferComponent},
  { path: 'branch', component : BranchComponent},
  { path: 'branch/:id', component : BranchDetailsComponent},
  { path: 'team', component : TeamComponent},
  { path: 'communicates', component : CommunicatesComponent},
  { path: 'events', component : EventsComponent},
  { path: 'events/:id', component : EventsDetailsComponent},
  { path: 'team/:id', component : TeamComponent},
  { path: 'gallery',component : GalleryComponent},
  { path: 'home'  ,component: HomeComponent },
  { path: 'gallery/:name', component : GalleryDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
