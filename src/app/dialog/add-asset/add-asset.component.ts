import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-asset',
  templateUrl: './add-asset.component.html',
  styleUrls: ['./add-asset.component.css']
})
export class AddAssetComponent {
  formVisible: boolean = true; 

  @Output() assetAdded = new EventEmitter<any>();
  @Output() formClosed = new EventEmitter<void>();

    
  asset: any = {};

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    this.http.post('/api/asset/createAsset', this.asset) 
      .subscribe((response) => {
        console.log('Asset added successfully:', response);
        this.assetAdded.emit(response); 
      }, (error) => {
        console.error('Error adding asset:', error);
      });
  }

 closeForm() {
    console.log('Closing form...');
    
   
    // Logic to close the form (e.g., reset form fields, hide the form)
    // For example, you could set a flag to hide the form
    this.formVisible = false;

    console.log('Form visibility after closing:', this.formVisible);
 }
 

}

