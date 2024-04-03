import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminModule } from './admin.module';

const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/manage-assets', component: ManageAssetsComponent },
  { path: 'admin/manage-users', component: ManageUsersComponent },
  { path: 'admin/admin-profile', component: AdminProfileComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule, ]
})
export class AdminRoutingModule { }
