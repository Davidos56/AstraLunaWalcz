import { Component, OnInit } from '@angular/core';
import 'owl.carousel';
import { AppService } from '../app.service';
import { ITrainer } from '../interface/trainersinterface';

declare var $:any;
declare var WOW:any;
declare var owlCarousel:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public trainers:ITrainer[];
  constructor(private service: AppService) 
  {
    
  }

  ngOnInit() 
  {
    var wow = new WOW().init();
    this.service.getTrainersList().subscribe(x=> this.trainers = x);
    
   $(window).stellar();
//    $('.counter').counterUp({
//     delay: 20,
//     time: 3000
// });

$('.testimonials-carousel').owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1
});

// Clients carousel (uses the Owl Carousel library)
$(".clients-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: { 0: { items: 2 }, 768: { items: 4 }, 900: { items: 6 }
  }
});
  }
}
