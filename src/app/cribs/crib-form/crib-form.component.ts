import { ElementRef,Component, OnInit,ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Crib} from '@sly/interfaces/crib';
import { FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import {CribService} from '@sly/services/crib.service';


/** 
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


}**/
const uri="http://localhost:3008/teachers";
@Component({
  selector: 'app-crib-form',
  templateUrl: './crib-form.component.html',
  styleUrls: ['./crib-form.component.css']
})
export class CribFormComponent implements OnInit {
  constructor(private http:Http,private router: Router,private cribService:CribService,private fb:FormBuilder) {

  }

  form:FormGroup;
  crib:Crib={type:'',price:'',address:'',description:'',bedrooms:'',bathroom:'',area:'',image:''};
  errorMessage:string='';
  successMessage:string='';
  selectedFile:File=null;

  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
    console.log(event);
  }
  

    ngOnInit() {
    this.form=new FormGroup({
      type:new FormControl(''),
      price:new FormControl(''),
      address:new FormControl(''),
      description:new FormControl(''),
      bedrooms:new FormControl(''),
      bathroom:new FormControl(''),
      area:new FormControl(''),
      image:new FormControl('')
    });
  }




  createTeacher(){
    this.successMessage='';
    this.errorMessage='';
    console.log(this.form);
    console.log(this.form.value);
    const fd = new FormData;
    fd.append('image',this.selectedFile,this.selectedFile.name);
    fd.append('type',this.form.value.type);
    fd.append('price',this.form.value.price);
    fd.append('address',this.form.value.address);
    fd.append('description',this.form.value.description);
    fd.append('bedrooms',this.form.value.bedrooms);
    fd.append('bathroom',this.form.value.bathroom);
    fd.append('area',this.form.value.area);

    this.http.post(uri,fd)
    .subscribe(res=>{
      console.log(res);
    })
  }

  propertyTypes: Array<string> = [
    'Condo',
    'Duplex',
    'House',
    'Unit'
  ];


    





}

