import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAssetsComponent } from './user-assets/user-assets.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { UserSidemenuComponent } from './user-sidemenu/user-sidemenu.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserAssetsComponent,
    UserNavbarComponent,
    UserSidemenuComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    SharedModule,
    
  ]
})
export class UserModule { }
