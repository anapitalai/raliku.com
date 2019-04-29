import { Component, OnInit,Input } from '@angular/core';
import { lb } from 'lightbox2';
import { Crib } from '@sly/interfaces/crib';

@Component({
  selector: 'app-crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib: Crib;
  constructor() { }

  ngOnInit() {
  }

  cribs:Crib;
  

}