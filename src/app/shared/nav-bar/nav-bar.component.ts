import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private authService: AuthService) {} 


  isLoggedIn(): boolean {
    return this.authService.isAuthenticated(); 
  }

  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
  
 
  signout(): void {
    this.authService.signout(); 
  }

}
