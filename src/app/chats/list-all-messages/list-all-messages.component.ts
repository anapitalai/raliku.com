import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Crib} from '@sly/interfaces/crib';
import {FjsService} from '@sly/services/fjs.service';
import {Chat} from '@sly/interfaces/chat';

@Component({
  selector: 'app-list-all-messages',
  templateUrl: './list-all-messages.component.html',
  styleUrls: ['./list-all-messages.component.css']
})
export class ListAllMessagesComponent implements OnInit {
  chat:Chat;
  constructor(private service:FjsService) { }
  
  ngOnInit() {
    this.service.getAllMessages()
    .subscribe(
       //data=>console.log(data),
      chat=> this.chat=chat
      //error=>this.error=error.statusText
    );

  }



}
