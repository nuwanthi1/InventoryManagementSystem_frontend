import { Component, OnInit } from '@angular/core';
import { AddUserDialogService } from 'src/app/services/add-user-dialog.service';
import { HttpClient } from '@angular/common/http';
import { DeleteUserService } from 'src/app/services/delete-user.service';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {
  constructor(
    private addUserDialogService: AddUserDialogService,
    private http: HttpClient,
    private deleteUserService: DeleteUserService,
  ) { }

    ngOnInit(): void {
    this.addUserDialogService.userAdded$.subscribe(newUser => {
    this.users.push(newUser); 
    
  });
    this.deleteUserService.userDeleted.subscribe((deletedusername: string) => {
    this.users = this.users.filter(user => user.username !== deletedusername);
    this.filterUsers(); 
      
    
    });
    
    this.retrieveUsersFromDatabase();
  }
  
  openAddUserDialog() {
    this.addUserDialogService.openAddUserDialog();
  }

  closeAddUserForm() {
    this.addUserDialogService.closeAddUserDialog();
  }

  searchTerm: string = ''; 
  users: any[] = []; 
  filteredUsers: any[] = []; 
 
  searchUsers(): void {
    this.filterUsers();
  }

 
  private filterUsers(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredUsers = this.users; 
    } else {
      this.filteredUsers = this.users.filter(user =>
        (user.username && user.username.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (user.firstName && user.firstName.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (user.lastName && user.lastName.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    }
  }


  retrieveUsersFromDatabase(): void {
    this.http.get<any[]>('http://localhost:8080/api/user/getAllUsers') 
      .subscribe(
        (users) => {
          this.users = users;
          this.filterUsers();
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }


  editUser(user: any) {
    console.log('Editing User:', user);
  }

  deleteUserConfirmation(username: string): void {
    this.deleteUserService.openDeleteUserDialog(username);
  }

}
