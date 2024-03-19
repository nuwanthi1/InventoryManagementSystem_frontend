import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-asset',
  templateUrl: './update-asset.component.html',
  styleUrls: ['./update-asset.component.css']
})
export class UpdateAssetComponent {
  asset: any = {};
  @Output() assetUpdated = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http.post('/api/asset/createAsset', this.asset)
      .subscribe((response) => {
        console.log('Asset Updated successfully:', response);
        this.assetUpdated .emit(response); 
      }, (error) => {
        console.error('Error Updating asset:', error);
      });
  }

}
