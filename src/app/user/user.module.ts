import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserAssetsComponent } from './user-assets/user-assets.component';



@NgModule({
  declarations: [
    UserProfileComponent,
    UserAssetsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
