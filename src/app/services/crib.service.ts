import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Observable,Subject } from 'rxjs';
import { map,tap,catchError } from 'rxjs/operators';

import { Crib } from '@sly/interfaces/crib';

@Injectable({
  providedIn: 'root'
})
export class CribService {

  public newCribSubject = new Subject<any>();
  endpoint="http://localhost:3008/teachers";
  data:any;
  constructor(private http:Http) { }

  /**replaces  return this.http.get('data/cribs.json').pipe(map(res => res.json())); */
  getAllCribs(){
    return this.http.get(this.endpoint)
    .pipe(map(res => res.json().teachers));
  }

  //add crib data without persistence
  addCrib(data) {
    data.image = 'default-crib';
    this.newCribSubject.next(data);
  }

 //add new crib data
  addNewCrib(crib:Crib):Observable<Crib>{

  return this.http.post(this.endpoint,crib)
  .pipe(map(res=>res.json()))
  //.pipe(tap(teacher=>this.teacherCreated(teacher)))
  .pipe(catchError(this.handleError));

  }
  //delete a crib
  teacherDelete(id:number):Observable<any>{
    return this.http.delete(`${this.endpoint}/${id}`)
    //.do(res=>this.teacherDeleted())
    .pipe(catchError(this.handleError));
}


//error handing in http request
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


/**
 
export class TeacherService{
    private authUrl:string='http://localhost:3007/teachers';
    //private authUrl='http://chervicontraining.com:3006/teachers';
    //observable source
    private contactDeletedSource=new Subject();
    private contactCreatedSource=new Subject<Teacher>();
    
    private config = { headers: { 'Content-Type': 'multipart/form-data' } };

    //observable stream
    contactCreated$=this.contactCreatedSource.asObservable();
    contactDeleted$=this.contactDeletedSource.asObservable();
    
    constructor( private http: Http){}
    
 //all contacts
getContacts():Observable<Teacher[]>{
    return this.http.get(`${this.authUrl}`)
    .map(res=>res.json().teachers)
    .catch(this.handleError);
}
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

//get single contact
getContact(id):Observable<Teacher>{
 return this.http.get(`${this.authUrl}/${id}`)
 .map(res=>res.json())
 .catch(this.handleError);
}

//update user details
updateContact(teacher:Teacher):Observable<Teacher>{
return this.http.put(`${this.authUrl}/${teacher._id}`,teacher)
.map(teacher=>teacher.json())
.catch(this.handleError)
}

createTeacher(teacher:Teacher):Observable<Teacher>{
    return this.http.post(this.authUrl,teacher)
    .map(res=>res.json())
    .do(teacher=>this.teacherCreated(teacher))
    .catch(this.handleError);
}

teacherDelete(id:number):Observable<any>{
    return this.http.delete(`${this.authUrl}/${id}`)
    .do(res=>this.teacherDeleted())
    .catch(this.handleError);
}

//messages
teacherCreated(teacher:Teacher){
    console.log('New Teacher has been created!');
    this.contactCreatedSource.next(teacher);
}

teacherDeleted(){
    this.contactDeletedSource.next();
    console.log('Teacher has been deleted!');
}

}
 _____________________________________________________________________
 //const uri='http://localhost:3007/teachers';
const  uri='http://chervicontraining.com:3006/teachers';

@Component({
  styles:[`
  input.ng-valid.ng-touched{
    border-left:5px solid green;
  }
  input.ng-invalid.ng-touched{
    border-left:5px solid red;
  }

 `],
  templateUrl:'./app/teachers/teachers-create/teachers-create.component.html' 
})

export class TeachersCreateComponent implements OnInit {
  constructor(private http:Http,private router: Router,private service:TeacherService,private fb:FormBuilder) {

  }

  form:FormGroup;
  teacher:Teacher={name:'',username:'',nid:'',avatarImage:''};
  errorMessage:string='';
  successMessage:string='';
  selectedFile:File=null;

    ngOnInit() {
    this.form=new FormGroup({
      name:new FormControl(''),
      username:new FormControl(''),
      nid:new FormControl(''),
      avatarImage:new FormControl('')
    });
  }



  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
    console.log(event);
  }
  

  createTeacher(){
    this.successMessage='';
    this.errorMessage='';
    console.log(this.form);
    console.log(this.form.value);
    const fd = new FormData;
    fd.append('avatarImage',this.selectedFile,this.selectedFile.name);
    fd.append('name',this.form.value.name);
    fd.append('username',this.form.value.username);
    fd.append('nid',this.form.value.nid);

    this.http.post(uri,fd)
    .subscribe(res=>{
      console.log(res);
    })
  }



}

  
 */



