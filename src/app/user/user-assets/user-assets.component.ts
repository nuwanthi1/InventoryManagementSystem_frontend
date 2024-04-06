import { Component, OnInit } from '@angular/core';
import { UserAssetService } from 'src/app/services/user-assets.service';

@Component({
  selector: 'app-user-assets',
  templateUrl: './user-assets.component.html',
  styleUrls: ['./user-assets.component.css']
})
export class UserAssetsComponent implements OnInit {
  assets: any[] = [];

  constructor(private userAssetService: UserAssetService) { }

  ngOnInit(): void {
    this.userAssetService.getUserAssets().subscribe(
      (response: any[]) => { 
        this.assets = response;
      },
      (error) => {
        console.error('Error fetching user assets:', error);
      }
    );
  }
}
