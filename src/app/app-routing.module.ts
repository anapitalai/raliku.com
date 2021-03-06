import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '@sly/authentication/login/auth.component';
import { CribListingComponent } from '@sly/cribs/crib-listing/crib-listing.component';
import { CribCardComponent } from './cribs/crib-card/crib-card.component';
import {CribSingleComponent} from '@sly/cribs/crib-single/crib-single.component';
import {CribsComponent} from '@sly/cribs/cribs.component';
import {StationeryComponent} from '@sly/stationery/stationery.component';
import {StationeryListComponent} from '@sly/stationery/stationery-list/stationery-list.component';
import {AdminComponent} from '@sly/admin/admin.component';
import {LeafletmapComponent} from '@sly/leafletmap/leafletmap.component';
import { ChatsComponent } from './chats/chats.component';
import { ListAllMessagesComponent } from './chats/list-all-messages/list-all-messages.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/cribs',
    pathMatch:'full'
  },
  {
    path:'login',
    component:AuthComponent
  },  
  {
    path:'about',
    component:AdminComponent
  },
  {
    path:'map',
    component:LeafletmapComponent
  },
  {
    path:'stationery',
    component:StationeryComponent,
    children:[
      {
        path:'',
        component:StationeryListComponent
      }
    ]
  },
{
  path:'cribs',
  component:CribsComponent,
  children:[{
      path:'',
      component:CribListingComponent
  },
  {
    path:':id',
    component:CribSingleComponent
}

  ]
},
{
  path:'chat',
  component:ChatsComponent,
  children:[
    {
      path:'',
      component:ListAllMessagesComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
