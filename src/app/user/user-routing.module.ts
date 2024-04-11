import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAssetsComponent } from './user-assets/user-assets.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from '../guards/auth.guard';



const routes: Routes = [
 { path: 'user/user-profile', component: UserProfileComponent, canActivate: [AuthGuard] }, 
 { path: 'user/user-assets', component: UserAssetsComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }