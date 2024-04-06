// add-user-dialog.service.ts

import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from '../dialog/add-user/add-user.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddUserDialogService {
  private apiUrl = 'http://localhost:8080/api/user/createUser';
  private userAddedSource = new Subject<any>();

  constructor(private modalService: NgbModal, private http: HttpClient, private authService: AuthService) { }

  openAddUserDialog() {
    const modalRef = this.modalService.open(AddUserComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false
    });
  }

  closeAddUserDialog() {
    console.log('Closing Add User Dialog');
    // this.modalService.dismissAll();
  }

  addUser(userData: any): Observable<any> {
    console.log('User Data:', userData);

    const authToken = localStorage.getItem('authToken');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`
      })
    };

    console.log('httpOptions:', httpOptions);

    return this.http.post<any>(this.apiUrl, userData, httpOptions).pipe(
      tap(newUser => this.userAddedSource.next(newUser))
    );
  }

  userAdded$ = this.userAddedSource.asObservable();
}
