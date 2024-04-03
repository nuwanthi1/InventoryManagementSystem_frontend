// delete-asset.service.ts
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteAssetComponent } from '../dialog/delete-asset/delete-asset.component';

@Injectable({
  providedIn: 'root'
})
export class DeleteAssetService {
  confirmDelete = new EventEmitter<string>(); 
  assetDeleted = new EventEmitter<string>(); // Event emitter for asset deletion

  constructor(
    private http: HttpClient,
    private modalService: NgbModal
  ) { }

  openDeleteAssetDialog(assetId: string): void {
    const modalRef = this.modalService.open(DeleteAssetComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false,
    });
    modalRef.componentInstance.assetId = assetId; 

    modalRef.componentInstance.confirmDelete.subscribe((confirmed: string) => {
      if (confirmed) {
        this.deleteAsset(confirmed); // Delete the asset if confirmed
      }
    });
  }

  private deleteAsset(assetId: string): void {
    console.log('Deleting asset:', assetId);
    this.http.delete<any>(`http://localhost:8080/api/asset/deleteAsset/${assetId}`)
      .subscribe(
        () => {
          console.log('Asset deleted successfully.');
          this.assetDeleted.emit(assetId); // Emit event to notify that asset is deleted
        },
        (error) => {
          console.error('Error deleting asset:', error);
        }
      );
  }
}
