import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { UpdateAssetComponent } from './update-asset/update-asset.component';
import { DeleteAssetComponent } from './delete-asset/delete-asset.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

 
@NgModule({
  declarations: [
    AddAssetComponent,
    UpdateAssetComponent,
    DeleteAssetComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserComponent,
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule,
  
  ]
})
export class DialogModule { }
