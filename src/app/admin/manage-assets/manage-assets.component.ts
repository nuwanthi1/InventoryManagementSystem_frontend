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
  
    this.editAssetService.assetUpdated$.subscribe(() => {
      this.retrieveAssetsFromDatabase(); // Update assets when an asset is updated
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
  pagedAssets: any[] = []; 
  currentPage: number = 1; 
  pageSize: number = 6; 

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

    this.updatePagedAssets();
  }

  editAsset(assetId: string): void {
    this.editAssetService.openEditAssetDialog(assetId);
  }

  deleteAssetConfirmation(assetId: string): void {
    this.deleteAssetService.openDeleteAssetDialog(assetId);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePagedAssets();
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

  private updatePagedAssets(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.filteredAssets.length);
    this.pagedAssets = this.filteredAssets.slice(startIndex, endIndex);
  }
}
