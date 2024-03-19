
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAssetComponent } from '../dialog/add-asset/add-asset.component';


@Injectable({
  providedIn: 'root'
})
export class AddAssetDialogService {

  constructor(private modalService: NgbModal) { }

  openAddAssetDialog() {
    const modalRef = this.modalService.open(AddAssetComponent, {
      centered: true,
      backdrop: 'static', 
      keyboard: false
    });
  }
  
  closeAddAssetDialog() {
      console.log('Closing Add Asset Dialog');
      //this.modalService.dismissAll();
  }
}

