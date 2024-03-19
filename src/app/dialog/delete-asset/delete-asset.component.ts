
import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-delete-asset',
  templateUrl: './delete-asset.component.html',
  styleUrls: ['./delete-asset.component.css']
})
export class DeleteAssetComponent {
  @Output() confirmDelete = new EventEmitter<void>();
  @Output() cancelDelete = new EventEmitter<void>();

  constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.dismiss('Cross button clicked');
  }

  handleNoButtonClick() {
    this.activeModal.dismiss('No button clicked');
  }
  
  

  confirm() {
    this.confirmDelete.emit();
  }

  cancelForm() {
    this.activeModal.dismiss('Form closed');
  }
}
