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

    this.deleteUserService.userDeleted.subscribe((deletedUsername: string) => {
      this.users = this.users.filter(user => user.username !== deletedUsername);
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
  pagedUsers: any[] = []; 
  currentPage: number = 1; 
  pageSize: number = 6; 

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
     // After filtering, update the pagedAssets array
  this.updatePagedUsers();
  }

 

  editUser(user: any) {
    console.log('Editing User:', user);
  }

  deleteUserConfirmation(username: string): void {
    this.deleteUserService.openDeleteUserDialog(username);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.updatePagedUsers();
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

  private updatePagedUsers(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.filteredUsers.length);
    this.pagedUsers = this.filteredUsers.slice(startIndex, endIndex);
  }
}

