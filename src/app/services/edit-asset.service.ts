import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UpdateAssetComponent } from '../dialog/update-asset/update-asset.component';
import { NotificationService } from './notification-bar.service';

@Injectable({
  providedIn: 'root'
})
export class EditAssetService {
  constructor(private http: HttpClient, private modalService: NgbModal,
  private notificationService: NotificationService) { }

  openEditAssetDialog(assetId: string): void {
    this.getAssetById(assetId).subscribe(asset => {
      const modalRef = this.modalService.open(UpdateAssetComponent, {
        centered: true,
        backdrop: 'static',
        keyboard: false
      });

      modalRef.componentInstance.asset = asset;
      modalRef.result.then((result) => {
        if (result === 'saved') {
          console.log('Asset update successful.');
          this.notificationService.showSuccessNotification("Asset Update Successfully")
        } else {
          console.log('Asset update failed or cancelled.');
          this.notificationService.showErrorNotification("Failed to update Asset")
        
        }
      })
        
    });
  }

  private getAssetById(assetId: string): Observable<any> {
    console.log('Fetching asset with ID:', assetId);
    return this.http.get<any>(`http://localhost:8080/api/asset/getAsset/${assetId}`);
    
  }

  updateAsset(assetId: string, assetData: any): Observable<any> {
    console.log('Updating asset with ID:', assetId);
    console.log('New asset data:', assetData);
    return this.http.put<any>(`http://localhost:8080/api/asset/updateAsset/${assetId}`, assetData);
  }
}
