// admin-navbar.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent {
  @Output() menuToggle = new EventEmitter<void>();
  @Output() signoutClicked = new EventEmitter<void>();

  
  constructor(private authService: AuthService) { }

  toggleMenu() {
    this.menuToggle.emit();
  }

  signout() {
    this.authService.signout();
    this.signoutClicked.emit();
  }
}
