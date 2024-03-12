import { Component } from '@angular/core';

@Component({
  selector: 'app-user-sidemenu',
  templateUrl: './user-sidemenu.component.html',
  styleUrls: ['./user-sidemenu.component.css']
})
export class UserSidemenuComponent {
  isMenuOpen: boolean = false;
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}
