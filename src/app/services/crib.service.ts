import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CribService {

  constructor(private http:Http) { }

  getAllCribs(){
    return this.http.get('data/cribs.json').pipe(map(res => res.json()));
  }

  addCrib(data) {
    return data.image = 'default-crib';
    //this.newCribSubject.next(data);
  }
}




//.pipe(map((response: any) => response.json()));