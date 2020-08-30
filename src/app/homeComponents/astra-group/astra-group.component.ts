import { Component, OnInit, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-astra-group',
  templateUrl: './astra-group.component.html',
  styleUrls: ['./astra-group.component.css']
})
export class AstraGroupComponent implements OnInit {
  @Input() isShadow:boolean = false;
  @Input() onFront:boolean = false; 
  constructor() { }

  ngOnInit() 
  {
  }

}
