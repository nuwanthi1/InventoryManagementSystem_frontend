import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAssetService {
  

  constructor(private http: HttpClient) { }

  
  getUserAssets(): Observable<any> {
    return this.http.get<any>('http://localhost:8080/api/asset/my-assets');
  }
}
