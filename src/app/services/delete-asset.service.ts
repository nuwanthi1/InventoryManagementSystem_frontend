
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAssetComponent } from '../dialog/delete-asset/delete-asset.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteAssetService {

  constructor(private modalService: NgbModal) { }

  openDeleteAssetDialog(): Promise<boolean> {
    const modalRef = this.modalService.open(DeleteAssetComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });

    return modalRef.result;
  }
}






