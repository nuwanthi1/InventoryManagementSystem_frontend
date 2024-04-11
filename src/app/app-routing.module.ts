import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';


  const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },

    {
      path: 'signup',
      component: SignupComponent
    },
    {
      path: 'signin',
      component: SigninComponent
    },
    {
      path: 'admin',
      canActivate: [AdminGuard], 
      loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) 
    },
    {
      path: 'user',
      canActivate: [AuthGuard], 
      loadChildren: () => import('./user/user.module').then(m => m.UserModule) 
    },
   

    
  ];

  console.log('Routes:', routes); 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
