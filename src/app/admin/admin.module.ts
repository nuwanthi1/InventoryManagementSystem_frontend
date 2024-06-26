import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { ManageAssetsComponent } from './manage-assets/manage-assets.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SharedModule } from '../shared/shared.module';
import { Form, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    DashboardComponent,
    SideMenuComponent,
    AdminNavbarComponent,
    ManageAssetsComponent,
    ManageUsersComponent,
    AdminProfileComponent,
    
  ],
  
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    RouterModule,
    NgxChartsModule,
    
  ]
})
export class AdminModule { }




