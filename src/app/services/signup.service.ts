import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  baseUrl = 'http://localhost:8080'; 

  constructor(private httpClient: HttpClient) {}

  signup(userData: any): Observable<any> {
    const signupUrl = `${this.baseUrl}/api/auth/signup`;


  const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
      })
  };
 
    return this.httpClient.post(signupUrl, userData, httpOptions);
  }

}

