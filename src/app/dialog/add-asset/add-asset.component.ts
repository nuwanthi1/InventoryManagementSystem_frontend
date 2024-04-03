import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddAssetDialogService } from 'src/app/services/add-asset-dialog.service';
import { NotificationService } from 'src/app/services/notification-bar.service';
import { NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent {
  formVisible: boolean = true; 
  asset: any = {
   
      assetId: '', 
      assetName: '',
      assetType: '',
      assignedTo: ''
  };
  

  @Output() assetAdded = new EventEmitter<any>();
  @Output() formClosed = new EventEmitter<void>();

    
  constructor(
    private http: HttpClient, private addAssetDialogService: AddAssetDialogService,
    private notificationService: NotificationService, public activeModal: NgbActiveModal,
  ) { }

  onSubmit(): void {
    const assetData = {
      assetId: this.asset.assetId, 
      assetName: this.asset.assetName, 
      assetType: this.asset.assetType, 
      assignedTo: this.asset.assignedTo
    };

    if (this.asset.assetId && this.asset.assetName && this.asset.assetType) {
      this.addAssetDialogService.addAsset(this.asset)
        .subscribe(
          (response) => {
            console.log('Asset added successfully:', response);
            this.notificationService.showSuccessNotification('Asset added successfully'); 
            this.assetAdded.emit(response); 
            this.closeForm(); 
          },
          (error) => {
            console.error('Error adding asset:', error);
            this.notificationService.showErrorNotification('Failed to add asset');
          }
        );
    } else {
      console.error('Asset data incomplete. Please fill in all required fields.');
      this.notificationService.showErrorNotification('Failed to add asset');
    }
  }


  closeForm() {
    this.activeModal.dismiss('Close button clicked');
  }
  

}

