import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminGuard } from '../guards/admin.guard';

const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent,canActivate: [AdminGuard] },
  { path: 'admin/manage-assets', component: ManageAssetsComponent, canActivate: [AdminGuard] },
  { path: 'admin/manage-users', component: ManageUsersComponent, canActivate: [AdminGuard] },
  { path: 'admin/admin-profile', component: AdminProfileComponent, canActivate: [AdminGuard] },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule, ]
})
export class AdminRoutingModule { }
