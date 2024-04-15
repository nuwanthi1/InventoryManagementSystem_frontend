
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'auth_token';
  private roleKey = 'role';

  constructor(private router: Router) { }

  setAuthToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setUserRole(role: string): void {
    console.log('Setting user role:', role); 
    localStorage.setItem(this.roleKey, role);
  }

  getUserRole(): string | null {
    const role = localStorage.getItem(this.roleKey);
    console.log('User role get:', role);
    return role;
  }

  
  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null; 
  }

  isAdmin(): boolean {
    const roles = this.getUserRole();
    return Array.isArray(roles) ? roles.includes('ROLE_ADMIN') : roles === 'ROLE_ADMIN';
  }
  

  
  signout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/signin']);
  }
  
}
