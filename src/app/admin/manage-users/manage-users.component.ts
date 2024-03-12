import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent {
    // Example list of assets (replace this with your actual data)
    users = [
      { userId: 1, FirstName: 'Product 1', LastName: 'Product 1', UserName: 'Product 1', Email: 'Type 1', TelephoneNo: 'User 1', Role:'User' },
      { userId: 1, FirstName: 'Product 1', LastName: 'Product 1', UserName: 'Product 1', Email: 'Type 1', TelephoneNo: 'User 1', Role:'User' }
      // Add more assets as needed
    ];
  
    editUser(user: any) {
      // Implement edit functionality
      console.log('Editing User:', user);
    }
  
    deleteUser(user: any) {
      // Implement delete functionality
      console.log('Deleting User:', user);
    }
  }
  
  

