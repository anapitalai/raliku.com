import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FjsService {
  endpoint = "http://localhost:3030/message";
  constructor(private http:Http) { }



  getAllMessages() {
    return this.http.get(this.endpoint)
      .pipe(map(res => res.json().message));
  }
}
