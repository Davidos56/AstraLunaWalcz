import { Component, OnInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  sticky:boolean = false;
  href: string ="";

  constructor(private router: Router) {
    router.events.subscribe((path: NavigationEnd) => {
    
      if (path.url != null && path.url != this.href) {
        this.SetTopSide();
        this.href = path.url
        this.sticky = this.href != "/home";
      }
    })
  } 
  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  scrollHandler($event) {
    if (this.href == "/home" || this.href == "/") {
        this.sticky = window.pageYOffset > 150;
    } else {
      this.sticky = true;
    }
  }

  private SetTopSide(){
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'auto' }) 
  }

  private Debug(item:any){
    if(!environment.production)
      {
        console.log(item);        
      }
  }
}

