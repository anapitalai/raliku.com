import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CribService } from '@sly/services/crib.service';
import { CribListingComponent } from '@sly/crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribFormComponent } from './crib-form/crib-form.component';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    CribFormComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [CribService],
  bootstrap: [AppComponent]
})
export class AppModule { }
