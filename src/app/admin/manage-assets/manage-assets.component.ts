// manage-assets.component.ts
import { Component, OnInit } from '@angular/core';
import { AddAssetDialogService } from 'src/app/services/add-asset-dialog.service';
import { DeleteAssetService } from 'src/app/services/delete-asset.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  constructor(
    private addAssetDialogService: AddAssetDialogService,
    private deleteAssetService: DeleteAssetService,
    private http: HttpClient 
  ) { }

  ngOnInit(): void {
    this.addAssetDialogService.assetAdded$.subscribe(newAsset => {
      this.assets.push(newAsset); 
    });
  
    this.deleteAssetService.assetDeleted.subscribe((deletedAssetId: string) => {
      this.assets = this.assets.filter(asset => asset.assetId !== deletedAssetId);
    });
  
    this.retrieveAssetsFromDatabase();
  }
  
  openAddAssetDialog() {
    this.addAssetDialogService.openAddAssetDialog();
  }

  closeAddAssetForm() {
    this.addAssetDialogService.closeAddAssetDialog();
  }

  deleteAssetConfirmation(assetId: string): void {
    this.deleteAssetService.openDeleteAssetDialog(assetId);
  }
  

  assets: any[] = []; 
 
  editAsset(asset: any) {
    console.log('Editing asset:', asset);
  }
 

  retrieveAssetsFromDatabase() {
    this.http.get<any[]>('http://localhost:8080/api/asset/getAssets')
      .subscribe(
        (assets) => {
          this.assets = assets;
        },
        (error) => {
          console.error('Error fetching assets:', error);
        }
      );
  }
}
