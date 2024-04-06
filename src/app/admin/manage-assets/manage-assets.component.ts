import { Component, OnInit } from '@angular/core';
import { AddAssetDialogService } from 'src/app/services/add-asset-dialog.service';
import { DeleteAssetService } from 'src/app/services/delete-asset.service';
import { HttpClient } from '@angular/common/http';
import { EditAssetService } from 'src/app/services/edit-asset.service';

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent implements OnInit {
  constructor(
    private addAssetDialogService: AddAssetDialogService,
    private deleteAssetService: DeleteAssetService,
    private editAssetService: EditAssetService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.addAssetDialogService.assetAdded$.subscribe(newAsset => {
      this.assets.push(newAsset); 
    });
  
    this.deleteAssetService.assetDeleted.subscribe((deletedAssetId: string) => {
      this.assets = this.assets.filter(asset => asset.assetId !== deletedAssetId);
      this.filterAssets(); 
    });
  
    this.retrieveAssetsFromDatabase();
  }
  
  openAddAssetDialog() {
    this.addAssetDialogService.openAddAssetDialog();
  }

  closeAddAssetForm() {
    this.addAssetDialogService.closeAddAssetDialog();
  }

  searchTerm: string = ''; 
  assets: any[] = []; 
  filteredAssets: any[] = []; 
 
  searchAssets(): void {
    this.filterAssets();
  }

 
  private filterAssets(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredAssets = this.assets; 
    } else {
      this.filteredAssets = this.assets.filter(asset =>
        asset.assetId.includes(this.searchTerm) ||
        asset.assetName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        asset.assetType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        asset.assignedTo.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }


  editAsset(assetId: string): void {
    this.editAssetService.openEditAssetDialog(assetId);
  }

  
  deleteAssetConfirmation(assetId: string): void {
    this.deleteAssetService.openDeleteAssetDialog(assetId);
  }


  retrieveAssetsFromDatabase(): void {
    this.http.get<any[]>('http://localhost:8080/api/asset/getAssets')
      .subscribe(
        (assets) => {
          this.assets = assets;
          this.filterAssets(); 
        },
        (error) => {
          console.error('Error fetching assets:', error);
        }
      );
  }
} 
