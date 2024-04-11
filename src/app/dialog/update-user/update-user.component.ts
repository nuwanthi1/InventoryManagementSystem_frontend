import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification-bar.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  @Input() user: any;
  @Output() userUpdated = new EventEmitter<any>();
  @Output() cancelUpdate = new EventEmitter<void>();
  selectedRole: string = ''; 


  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal,
  ) {
    this.selectedRole = '';
   }

  

  ngOnInit(): void {
    console.log('Received user data:', this.user);
    this.selectedRole = this.user.roles[0].name;
  }

  onSubmit(): void {
   const username = this.user.username; 
   console.log('User data to be sent:', this.user);
   const rolesArray = [this.selectedRole];
   this.user.roles = rolesArray;

    this.http.put(`http://localhost:8080/api/user/updateUser/${username}`, this.user)
      .subscribe(
        (response) => {
          console.log('User updated successfully:', response);
          this.notificationService.showSuccessNotification("User updated successfully");
          this.userUpdated.emit(response);
          this.activeModal.close(); 
        },
        (error) => {
          console.error('Error updating user:', error);
          this.notificationService.showErrorNotification("Failed to update user");
        }
      );
  }

  onCancel() {
    this.activeModal.dismiss('Close button clicked');
  }
}
