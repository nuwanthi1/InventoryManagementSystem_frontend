import { Component } from '@angular/core'
import { SigninService } from '../services/signin.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  username: string = '';
  password: string = '';
  error: string | null = null;

  constructor(private signinService: SigninService, private authService: AuthService, private router: Router) { }

  Submit(signinformValue: any) {
    const credentials = {
      username: signinformValue.username,
      password: signinformValue.password
    };
    this.signinService.signin(credentials)
      .subscribe(
        response => {
          console.log('Signin response:', response);
          if (response.roles.includes('ROLE_ADMIN')) {
            console.log('User is admin');
            this.authService.setUserRole('ROLE_ADMIN'); 
            this.router.navigate(['/admin/dashboard']);
          } else {
            console.log('User is regular user');
            this.authService.setUserRole('ROLE_USER'); 
            this.router.navigate(['/user/user-assets']);
          }
        },
        error => {
          
          if (error.status === 401) {
            this.error = 'Username and password do not match. Please try again.';
          } else {
            this.error = 'An error occurred. Please try again later.';
          }
          console.error('Signin failed:', error);
          setTimeout(() => {
            this.error = null; 
          }, 3000); 
        }
      );
  }
}