import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CribService } from '@sly/services/crib.service';
import { CribListingComponent } from '@sly/cribs/crib-listing/crib-listing.component';
import { CribCardComponent } from '@sly/cribs/crib-card/crib-card.component';
import { CribFormComponent } from '@sly/cribs/crib-form/crib-form.component';
import { AuthComponent } from '@sly/authentication/login/auth.component';
import { UtilService } from '@sly/services/util.service';
import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    CribFormComponent,
    AuthComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [CribService,UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
