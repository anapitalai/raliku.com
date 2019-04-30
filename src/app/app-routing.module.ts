import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from '@sly/authentication/login/auth.component';
import { CribListingComponent } from '@sly/cribs/crib-listing/crib-listing.component';
import { CribCardComponent } from './cribs/crib-card/crib-card.component';

const routes: Routes = [

{
  path:'cribs',
  component:CribListingComponent,
  children:[{
      path:':id',
      component:CribCardComponent
  }

  ]
},
{
  path:'login',
  component:AuthComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
