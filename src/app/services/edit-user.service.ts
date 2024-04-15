import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateUserComponent } from '../dialog/update-user/update-user.component'; 
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {
  userUpdated = new Subject<any>(); 

  constructor(
    private modalService: NgbModal,
    private http: HttpClient
  ) { }

  openEditUserDialog(user: any): void {
    const modalRef = this.modalService.open(UpdateUserComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false
    });

    modalRef.componentInstance.user = user;
    modalRef.componentInstance.userUpdated.subscribe((updatedUser: any) => { 
      this.userUpdated.next(updatedUser);
    });
  }
}
