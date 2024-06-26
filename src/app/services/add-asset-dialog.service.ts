import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddAssetComponent } from '../dialog/add-asset/add-asset.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable, Subject,tap } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class AddAssetDialogService {
  private apiUrl = 'http://localhost:8080/api/asset/createAsset'; 
  private assetAddedSource = new Subject<any>(); 

  constructor(private modalService: NgbModal, private http: HttpClient, private authService: AuthService) { }

  openAddAssetDialog() {
    const modalRef = this.modalService.open(AddAssetComponent, {
      centered: true,
      backdrop: 'static',
      keyboard: false
    });
  }
  
  closeAddAssetDialog() {
    console.log('Closing Add Asset Dialog');
    //this.modalService.dismissAll();
  }

  addAsset(assetData: any): Observable<any> {
    console.log('Asset Data:', assetData); 

    const authToken = localStorage.getItem('authToken');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}` 
      })
    };

    console.log('httpOptions:', httpOptions); 

   
    return this.http.post<any>(this.apiUrl, assetData, httpOptions).pipe(
      tap(newAsset => this.assetAddedSource.next(newAsset)) 
    );
  }

  assetAdded$ = this.assetAddedSource.asObservable();



}
