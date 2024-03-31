import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private authService: AuthService) {} // Inject AuthService if available

  // Check if the user is logged in
  isLoggedIn(): boolean {
    return this.authService.isAuthenticated(); // Implement this method in AuthService
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
  
  // Perform signout
  signout(): void {
    this.authService.signout(); // Implement this method in AuthService
  }

}
