import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {ModalOption} from 'bootstrap';



import { AuthService } from '@sly/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  credentials = { email: '', password: '' };
  errorMessage: string = '';
  successMessage: string = '';

  ngOnInit() { }

  constructor(private authService: AuthService, private router: Router) {



  }

  login() {
    this.errorMessage = '';
    this.authService.login(this.credentials.email, this.credentials.password)
      .subscribe(data => {

         //close the modal after the form submit
        $('#myModal').modal('hide');
             
        this.router.navigate(['']);
        console.log(data);
      },
        err => {
          this.errorMessage = err;
          console.error(err)
        }
      );
  }
  closeModal(){
    this.closeModal();
  }

}
