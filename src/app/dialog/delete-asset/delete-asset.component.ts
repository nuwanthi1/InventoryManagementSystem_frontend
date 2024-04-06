import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-asset',
  templateUrl: './delete-asset.component.html',
  styleUrls: ['./delete-asset.component.css']
})
export class DeleteAssetComponent {
  @Output() confirmDelete = new EventEmitter<string>(); 

  assetId: string = ''; 

  constructor(public activeModal: NgbActiveModal) { }

  closeModal() {
    this.activeModal.dismiss('Cross button clicked');
  }

  handleNoButtonClick() {
    this.activeModal.dismiss('No button clicked');
  }

  confirm(): void {
    console.log('Confirming deletion...',this.assetId);
    this.confirmDelete.emit(this.assetId); 
    this.activeModal.close();
  }

  cancelForm() {
    this.activeModal.dismiss('Form closed');
  }
}
