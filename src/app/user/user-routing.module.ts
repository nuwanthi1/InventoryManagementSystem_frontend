import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAssetsComponent } from './user-assets/user-assets.component';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
 { path: 'user/user-profile', component: UserProfileComponent }, 
 { path: 'user/user-assets', component: UserAssetsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }