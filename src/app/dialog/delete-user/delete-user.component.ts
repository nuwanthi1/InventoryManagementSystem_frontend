import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {
  @Output() confirmDelete = new EventEmitter<string>(); 

  username: string = ''; 

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.dismiss('Cross button clicked');
  }

  handleNoButtonClick() {
    this.activeModal.dismiss('No button clicked');
  }

  confirm(): void {
    console.log('Confirming deletion...',this.username);
    this.confirmDelete.emit(this.username); 
    this.activeModal.close();
  }

  cancelForm() {
    this.activeModal.dismiss('Form closed');
  }
}
