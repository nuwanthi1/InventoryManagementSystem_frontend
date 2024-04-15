import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from 'src/app/services/notification-bar.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent implements OnInit {
  @Input() asset: any;
  @Output() assetUpdated = new EventEmitter<void>();
  @Output() cancelUpdate = new EventEmitter<void>();
  availableUsernames: string[] = [];

  constructor(
    private http: HttpClient,
    private notificationService: NotificationService,
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.fetchAvailableUsernames();
  }

  fetchAvailableUsernames(): void {
    this.userService.getAvailableUsernames().subscribe(
      (usernames: string[]) => {
        this.availableUsernames = usernames;
      },
      (error: any) => {
        console.error('Error fetching available usernames:', error);
      }
    );
  }

  onSubmit(): void {
    const assetId = this.asset.assetId;
    if (!assetId) {
      console.error('Asset ID is missing.');
      return;
    }

    this.http.put(`http://localhost:8080/api/asset/updateAsset/${assetId}`, this.asset)
      .subscribe(
        (response) => {
          console.log('Asset Updated successfully:', response);
          this.notificationService.showSuccessNotification("Asset Successfully Updated");
          this.assetUpdated.emit(); 
          this.activeModal.dismiss('Close button clicked'); 
        },
        (error) => {
          console.error('Error Updating asset:', error);
          this.notificationService.showErrorNotification("Failed to Update Asset");
        }
      );
  }

  onCancel() {
    this.activeModal.dismiss('Close button clicked');
  }
}
