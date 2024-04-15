import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SigninService {
  baseUrl = 'http://localhost:8080'; 

  constructor(private httpClient: HttpClient) {}

  signin(credentials: { username: string, password: string }): Observable<any> {
    const signinUrl = `${this.baseUrl}/api/auth/signin`;
    console.log('Requesting signin with credentials:', credentials);

    return this.httpClient.post<any>(signinUrl, credentials, { 
      headers: new HttpHeaders({'Content-Type': 'application/json'}) }).pipe(
      tap(response => {
        console.log('Signin successful:', response);
        localStorage.setItem('token', response.accessToken);
        localStorage.setItem('role', response.roles[0]);

        
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Signin failed:', error);
        return throwError(error); 
      })
    );
  }
}
