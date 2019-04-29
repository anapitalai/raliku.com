import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable,Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CribService {

  public newCribSubject = new Subject<any>();
  endpoint="http://localhost:3008/teachers";
  constructor(private http:Http) { }

  /**replaces  return this.http.get('data/cribs.json').pipe(map(res => res.json())); */
  getAllCribs(){
    return this.http.get(this.endpoint)
    .pipe(map(res => res.json().teachers));
  }

  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

  
}



