import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';
import { Observable,throwError } from 'rxjs';
import {map,tap,catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private authUrl='http://localhost:3008/users/login';

  private loggedIn: boolean=false;

  constructor(private http:Http) { 
    this.loggedIn=!!localStorage.getItem('token');
  }

  isLoggedIn(){
    return this.loggedIn;

}



login(email:string,password:string):Observable<string>{
  return this.http.post(`${this.authUrl}`,{email,password})
  .pipe(map(res=>res.json()))
  .pipe(tap(res=>{ 
    if (res.token) {
    localStorage.setItem('token',res.token);
    //var decoded=jwt_decode(res.token);



    this.loggedIn=true;

    
  }
  }))
  .pipe(catchError(this.handleError));
  
}

//logout
logout(){
 localStorage.removeItem('token');
 this.loggedIn=false;
}



//handle errors
private handleError(err){
let errMessage:string;
if(err instanceof Response){
    let body=err.json() || '';
    let error=body.error || JSON.stringify(body);
    errMessage=`${err.status}-${err.statusText || ''} ${error}`;
}
else{
    errMessage = err.message ? err.message: err.toString();
}
return Observable.throw(errMessage);
}

}
