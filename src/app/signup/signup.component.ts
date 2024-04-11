import { Component } from '@angular/core';
import { SignupService } from '../services/signup.service';
import { NgForm } from '@angular/forms';
import { NotificationService } from '../services/notification-bar.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  usernameError: string = ''; 
  emailError: string = '';    

  constructor(
    private signupService: SignupService,
    private notificationService: NotificationService 
  ) { }

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid && signupForm.value.password === signupForm.value.confirmPassword) {
      const userData = {
        username: signupForm.value.username,
        firstName: signupForm.value.firstName,
        lastName: signupForm.value.lastName,
        email: signupForm.value.email,
        telephoneNumber: signupForm.value.telephoneNumber,
        password: signupForm.value.password,
      };

      this.signupService.signup(userData)
        .subscribe(
          response => {
            console.log('Signup successful:', response);
            this.notificationService.showSuccessNotification('Signup successful');
            signupForm.resetForm();
            this.clearUsernameError();
            this.clearEmailError();
          },
          error => {
            console.error('Failed to Signup:', error.error.message);
            this.notificationService.showErrorNotification('Failed to signup. Please try again.');
            
            if (error.error.message.includes('Username is already taken')) {
              this.usernameError = 'Username already taken';
            }
            if (error.error.message.includes('Email is already in use')) {
              this.emailError = 'Email already in use';
            }
          }
        );
    } else {
      
      this.notificationService.showErrorNotification('Passwords do not match.');
    }
  }

  clearUsernameError(): void {
    this.usernameError = '';
  }
  
  clearEmailError(): void {
    this.emailError = '';
  }
}
