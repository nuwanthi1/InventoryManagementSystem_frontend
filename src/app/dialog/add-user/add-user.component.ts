import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification-bar.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUserDialogService } from 'src/app/services/add-user-dialog.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  formVisible: boolean = true;
  user: any = {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    telephoneNumber: '',
    password: '',
    role:''
  };

  @Output() userAdded = new EventEmitter<any>();
  @Output() formClosed = new EventEmitter<void>();

  constructor(
    private addUserDialogService: AddUserDialogService,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal,
  ) { }

  onSubmit(): void {
    if (this.isValidUser(this.user)) {
      this.addUserDialogService.addUser(this.user)
        .subscribe(
          (response) => {
            console.log('User added successfully:', response);
            this.notificationService.showSuccessNotification('User added successfully');
            this.userAdded.emit(response);
            this.closeForm();
          },
          (error) => {
            console.error('Error adding user:', error);
            this.notificationService.showErrorNotification('Failed to add user');
          }
        );
    } else {
      console.error('User data incomplete. Please fill in all required fields.');
      this.notificationService.showErrorNotification('Failed to add user');
    }
  }

  closeForm() {
    this.activeModal.dismiss('Close button clicked');
  }

  private isValidUser(user: any): boolean {
    return !!user.username && !!user.email && !!user.firstName && !!user.lastName && !!user.telephoneNumber;
  }

}
