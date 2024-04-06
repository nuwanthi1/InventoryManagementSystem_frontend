import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification-bar.service';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent {
  asset: any = {};
  @Output() assetUpdated = new EventEmitter<any>(); 
  @Output() cancelUpdate = new EventEmitter<void>(); 

  constructor(private http: HttpClient,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal,
  ) { }


  
  onSubmit(): void {
    const assetId = this.asset.assetId; 
    if (!assetId) {
      console.error('Asset ID is missing.');
      return;
    }
  
    this.http.put(`/api/asset/updateAsset/${assetId}`, this.asset)
      .subscribe((response) => {
        console.log('Asset Updated successfully:', response);
        this.notificationService.showSuccessNotification("Asset Successfully Updated");
        this.assetUpdated.emit(response); 
      }, (error) => {
        console.error('Error Updating asset:', error);
       // this.notificationService.showErrorNotification("Failed to Update Asset");
      });
  }
  

  onCancel() {
    this.activeModal.dismiss('Close button clicked');
  }

 
}
