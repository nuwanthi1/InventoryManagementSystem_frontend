// side-menu.component.ts
import { Component, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.css'],
   
})
export class SideMenuComponent {
    isMenuOpen: boolean = false;
  
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  
    closeMenu() {
      this.isMenuOpen = false;
    }
}
