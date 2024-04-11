import { Component, OnInit } from '@angular/core';
import { AdminProfileService } from 'src/app/services/admin-profile.service';
import { NotificationService } from 'src/app/services/notification-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  adminData: any = {};

  constructor(
    private adminProfileService: AdminProfileService,
    private notificationService: NotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadAdminData();
  }

  loadAdminData(): void {
    this.adminProfileService.getAdminData().subscribe(
      data => {
        this.adminData = data;
        console.log('Admin data loaded successfully:', data);
      },
      error => {
        console.error('Error loading admin data:', error);
      }
    );
  }

  updateAdminProfile(): void {
    this.adminProfileService.updateAdminData(this.adminData.username, this.adminData).subscribe(
      updatedData => {
        console.log('Admin data updated successfully:', updatedData);
        this.notificationService.showSuccessNotification('Admin profile updated successfully.');
        this.router.navigate(['/signin']);
      },
      error => {
        console.error('Error updating admin data:', error);
        this.notificationService.showErrorNotification('Failed to update admin profile. Please try again.');
      }
    );
  }
}
