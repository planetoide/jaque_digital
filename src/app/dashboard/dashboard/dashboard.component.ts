import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private _auth: AuthenticationService) { }

  ngOnInit(): void {
  }

  public logOut() {
    this._auth.logOut();
    this.router.navigate(["/login"]);
  }
}
