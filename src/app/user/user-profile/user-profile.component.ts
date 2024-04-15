import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { NotificationService } from 'src/app/services/notification-bar.service'; // Import NotificationService
import { NgForm } from '@angular/forms'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  userData: any = {};

  constructor(
    private userProfileService: UserProfileService,
    private notificationService: NotificationService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.userProfileService.getUserData().subscribe(
      data => {
        this.userData = data;
        console.log('User data loaded successfully:', data);
      },
      error => {
        console.error('Error loading user data:', error);
      }
    );
  }

  updateUserProfile(profileForm: NgForm): void {
    if (profileForm.valid) {
      this.userProfileService.updateUserData(this.userData.username, this.userData).subscribe(
        updatedData => {
          console.log('User data updated successfully:', updatedData);
          this.notificationService.showSuccessNotification('User profile updated successfully.'); 
          this.router.navigate(['/signin']);
        },
        error => {
          console.error('Error updating user data:', error);
          this.notificationService.showErrorNotification('Failed to update user profile. Please try again.'); 
        }
      );
    } else {
      this.notificationService.showErrorNotification('Please ensure all fields are filled correctly.'); 
    }
  }
}

