import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  searchFlag:boolean =false;
  userData: any;
  searchQuery: string = '';
  filteredUsers: any[] = [];
  activeUserName : string=''
  

  constructor(private dataService: DataService) { 
  }

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.userData = data;
      this.filteredUsers = data; 
    });
  }

  filterUsers(): void {
    if (!this.searchQuery) {
      this.filteredUsers = this.userData;
    } else {
      this.filteredUsers = this.userData.filter((user: any) => user.email.includes(this.searchQuery));
      this.searchFlag=true;
    }
  
  }

  resetFilters(): void {
    this.searchQuery = ''; 
    this.filteredUsers = this.userData; 
    this.searchFlag=false;
  }



  receivedFromChild(userName:string):void{
    this.activeUserName=userName
  }
}