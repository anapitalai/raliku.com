/** import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}**/
import { Component, OnInit,ViewChild } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';




import {CribService} from '@sly/services/crib.service';


@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs:Array<any>;
  error:String;
  constructor(private http:Http, private cribService:CribService) { }

  ngOnInit() {
  
    this.cribService.getAllCribs()
    .subscribe(
      data=> this.cribs=data,
      error=>this.error=error.statusText
    );
  }

}



