import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationService } from './notification-bar.service';
import { DeleteUserComponent } from '../dialog/delete-user/delete-user.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteUserService {
  confirmDelete = new EventEmitter<string>
  userDeleted =new EventEmitter<string>

  constructor(
    private http: HttpClient,
    private modalService: NgbModal,
    private notificationService: NotificationService,
  ) { }

  openDeleteUserDialog(username: string): void {
    const modalRef = this.modalService.open(DeleteUserComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.username = username; 

    modalRef.componentInstance.confirmDelete.subscribe((confirmed: string) => {
      if (confirmed) {
        this.deleteUser(confirmed); 
      }
    });
  }

  private deleteUser(username: string): void {
    console.log('Deleting user:', username);
    this.http.delete<any>(`http://localhost:8080/api/user/deleteUser/${username}`)
      .subscribe(
        () => {
          console.log('User deleted successfully.');
          this.notificationService.showSuccessNotification('User deleted successfully'); 
          this.userDeleted.emit(username); 
        },
        (error) => {
          console.error('Error deleting user:', error);
          this.notificationService.showErrorNotification('Failed to delete user'); 
        }
      );
  }
}

