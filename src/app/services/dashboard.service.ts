
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getTotalAssetsByType(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/dashboard/total-assets');
  }

  getFreeAssetsByType(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/dashboard/free-assets');
  }

  getAssignedAssetsByType(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/dashboard/assigned-assets');
  }
}
