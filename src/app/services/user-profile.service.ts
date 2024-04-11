import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  constructor(private http: HttpClient) {}

  getUserData(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/auth/user/profile');
  }

  updateUserData(username:string,userData: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/auth/user/updateProfile/${username}`, userData);
  }
}
