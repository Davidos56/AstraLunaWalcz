import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

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
      
      if (path.url != null) 
      {
        window.scroll({ 
          top: 0, 
          left: 0, 
          behavior: 'auto' }) 
        this.href = path.url

        if (this.href != "/home" && this.href != "/" ) {
          this.sticky = true;
        }
        else {
          this.sticky = false;
        }
        console.log(this.href);
      }
    })
  } 
  ngOnInit() 
  {
   
  }


  @HostListener('window:scroll', ['$event'])
  scrollHandler($event) {
    if (this.href == "/home" || this.href == "/") {
      const verticalOffset = window.pageYOffset
      if (verticalOffset > 200) {
        this.sticky = true;
      }
      else {
        this.sticky = false;
      }
      console.log(verticalOffset, this.sticky, this.href);
    } else {
      this.sticky = true;
    }
  }
}

