import { Component, OnInit,ViewChild } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Crib} from '@sly/interfaces/crib';

import {CribService} from '@sly/services/crib.service';
import {UtilService} from '@sly/services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {
  //crib:Crib;
  cribs:Crib[];
  error: string = '';
  sortField: string = 'price';
  sortDirection: string = 'asc';
  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'bedrooms',
    'price',
    'type'
  ];
  constructor(private http:Http,private router:Router, 
    private cribService:CribService,private utilService:UtilService) { }

  ngOnInit() {

  
    this.cribService.getAllCribs()
    .subscribe(
       //data=>console.log(data),
      cribs=> this.cribs=cribs,
      error=>this.error=error.statusText
    );

    this.cribService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    );
  }




}



