import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@sly/services/auth.service';
//import  'dom4';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'raliku-com';
  test: any;
  n:any;
  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  constructor(private authService: AuthService,
    private router: Router) {  
   
  }
}
