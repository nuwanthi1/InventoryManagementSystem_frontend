import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent {
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
