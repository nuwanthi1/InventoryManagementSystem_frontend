import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-assets',
  templateUrl: './manage-assets.component.html',
  styleUrls: ['./manage-assets.component.css']
})
export class ManageAssetsComponent {
  // Example list of assets (replace this with your actual data)
  assets = [
    { assetId: 1, assetName: 'Product 1', assetType: 'Type 1', assignedTo: 'User 1' },
    { assetId: 2, assetName: 'Product 2', assetType: 'Type 2', assignedTo: 'User 2' },
    { assetId: 3, assetName: 'Product 3', assetType: 'Type 1', assignedTo: 'User 1' },
    { assetId: 4, assetName: 'Product 4', assetType: 'Type 2', assignedTo: 'User 2' },
    { assetId: 5, assetName: 'Product 5', assetType: 'Type 1', assignedTo: 'User 1' },
    { assetId: 6, assetName: 'Product 6', assetType: 'Type 2', assignedTo: 'User 2' },
    { assetId: 7, assetName: 'Product 7', assetType: 'Type 1', assignedTo: 'User 1' },
    { assetId: 8, assetName: 'Product 8', assetType: 'Type 2', assignedTo: 'User 2' },
    { assetId: 9, assetName: 'Product 9', assetType: 'Type 1', assignedTo: 'User 1' },
    { assetId: 10, assetName: 'Product 10', assetType: 'Type 2', assignedTo: 'User 2' },
    { assetId: 11, assetName: 'Product 11', assetType: 'Type 1', assignedTo: 'User 1' },
    { assetId: 12, assetName: 'Product 12', assetType: 'Type 2', assignedTo: 'User 2' },
    // Add more assets as needed
  ];

  editAsset(asset: any) {
    // Implement edit functionality
    console.log('Editing asset:', asset);
  }

  deleteAsset(asset: any) {
    // Implement delete functionality
    console.log('Deleting asset:', asset);
  }
}



