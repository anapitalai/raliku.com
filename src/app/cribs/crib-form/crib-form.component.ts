import { Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {CribService} from '@sly/services/crib.service';

@Component({
  selector: 'app-crib-form',
  templateUrl: './crib-form.component.html',
  styleUrls: ['./crib-form.component.css']
})
export class CribFormComponent implements OnInit {

  @ViewChild('newCribForm') newCribForm: NgForm;
  
  propertyTypes: Array<string> = [
    'Condo',
    'Duplex',
    'House',
    'Unit'
  ];

  constructor(
    private cribService: CribService
    //private utilService: UtilService
  ) { }

  ngOnInit() {
  }
 //no persistence
  onCribSubmit(data) {
    //console.log(data);
    this.cribService.addCrib(data);
    this.newCribForm.reset();
  }

  //persistence
  cribSubmit(data) {
    //console.log(data);
    this.cribService.addNewCrib(data);
    this.newCribForm.reset();
  }


}
