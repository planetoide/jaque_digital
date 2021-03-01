import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from 'src/app/shared/services/common.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {
  displayedColumns: string[] = ['image','name', 'lastname', 'email', 'gender'];
  dataSource: any;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private _commonService: CommonService) { }

  ngOnInit(): void {
    this._commonService.getUsers().subscribe(res=> {
     this.dataSource = new MatTableDataSource<User>(res.users);
     this.dataSource.paginator = this.paginator;
    });
  }
}
