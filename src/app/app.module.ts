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
import { AdminComponent } from './admin/admin.component';
import { LeafletmapComponent } from './leafletmap/leafletmap.component';
import {CribsComponent} from '@sly/cribs/cribs.component';
import { CribSingleComponent } from './cribs/crib-single/crib-single.component';
import { StationeryComponent } from './stationery/stationery.component';
import { StationeryListComponent } from './stationery/stationery-list/stationery-list.component';
import { ChatsComponent } from './chats/chats.component';
import { ListAllMessagesComponent } from './chats/list-all-messages/list-all-messages.component';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    CribFormComponent,
    CribsComponent,
    AuthComponent,
    SortByPipe,
    AdminComponent,
    LeafletmapComponent,
    CribSingleComponent,
    StationeryComponent,
    StationeryListComponent,
    ChatsComponent,
    ListAllMessagesComponent
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
