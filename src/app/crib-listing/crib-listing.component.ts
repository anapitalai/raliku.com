import { Component, OnInit,ViewChild } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';




import {CribService} from '@sly/services/crib.service';
import {UtilService} from '@sly/services/util.service';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs:Array<any>;
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
  constructor(private http:Http, 
    private cribService:CribService,private utilService:UtilService) { }

  ngOnInit() {
  
    this.cribService.getAllCribs()
    .subscribe(
      data=> this.cribs=data,
      error=>this.error=error.statusText
    );

    this.cribService.newCribSubject.subscribe(
      data => this.cribs = [data, ...this.cribs]
    );

  }

}



