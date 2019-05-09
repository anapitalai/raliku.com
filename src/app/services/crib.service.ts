import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subject } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Crib } from '@sly/interfaces/crib';

@Injectable({
  providedIn: 'root'
})
export class CribService {

  public newCribSubject = new Subject<any>();
  endpoint = "http://localhost:3008/teachers";
  
  constructor(private http: Http) { }

  ngOnInit(){
    
  }
  getAllCribs() {
    return this.http.get(this.endpoint)
      .pipe(map(res => res.json().cribs));
  }

  //add crib data without persistence
  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

  //add new crib data
  addNewCrib(crib: Crib): Observable<Crib> {

    return this.http.post(this.endpoint, crib)
      .pipe(map(res => res.json()))
      //.pipe(tap(teacher=>this.teacherCreated(teacher)))
      .pipe(catchError(this.handleError));

  }
  //get single contact
  getOneCrib(id:number): Observable<Crib> {
    return this.http.get(`${this.endpoint}/${id}`)
      .pipe(map(res => res.json()))
      .pipe(catchError(this.handleError));
  }

  //update user details
  updateContact(crib: Crib): Observable<Crib> {
    return this.http.put(`${this.endpoint}/${crib._id}`, crib)
      .pipe(map(teacher => teacher.json().cribs))
      .pipe(catchError(this.handleError));
  }

  //delete a crib
  cribDelete(id: number): Observable<any> {
    return this.http.delete(`${this.endpoint}/${id}`)
      //.do(res=>this.teacherDeleted())
      .pipe(catchError(this.handleError));
  }


  //error handing in http request
  private handleError(err) {
    let errMessage: string;
    if (err instanceof Response) {
      let body = err.json() || '';
      //let error = body.error || JSON.stringify(body);
      let error = body.error;
      errMessage = `${err.status}-${err.statusText || ''} ${error}`;
    }
    else {
      errMessage = err.message ? err.message : err.toString();
    }
    return throwError(errMessage);
  }




}


