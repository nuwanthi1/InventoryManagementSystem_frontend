import { Component } from '@angular/core';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
    isMenuOpen: boolean = true; 
  
    toggleMenu() {
        if (window.innerWidth < 768) { 
            this.isMenuOpen = !this.isMenuOpen;
        }
    }
}
