import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

  constructor(private http: HttpClient) { }

  getAdminData(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/auth/admin/profile`);
  }

  updateAdminData(username:string,adminData: any): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/auth/admin/updateProfile/${username}`, adminData);
   }
}
