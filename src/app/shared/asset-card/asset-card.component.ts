import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.css']
})
export class AssetCardComponent {
  @Input() assetId!: string;
  @Input() assetName!: string;
  @Input() assetType!: string;
  @Input() assets: any[] = [];
  
  
 
}
