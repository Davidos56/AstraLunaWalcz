import { Component, OnInit, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public MainLogoPath: string
  public SubLogoPath: string
  constructor() {
    this.MainLogoPath = "assets\\images\\logos\\AstraLunaLogoBlack.svg";
    this.SubLogoPath = "assets\images\logos\AstraGrupaBlack.svg"
  }

  ngOnInit() {
    this.getCorrectlogo(window.innerWidth)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.getCorrectlogo(event.target.innerWidth)
  }

  private getCorrectlogo(width): void {
    if (width < 992) {
      this.MainLogoPath = "assets\\images\\logos\\AstraLunaLogoWhite.svg"
      this.SubLogoPath = "assets\\images\\logos\\AstraGrupaWhite.svg"
    } else {
      this.MainLogoPath = "assets\\images\\logos\\AstraLunaLogoBlack.svg";
      this.SubLogoPath = "assets\\images\\logos\\AstraGrupaBlack.svg"
    }
  }
}