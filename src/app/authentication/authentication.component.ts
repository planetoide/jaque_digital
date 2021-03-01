import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.sass']
})
export class AuthenticationComponent implements OnInit {
  loginForm: any;

  constructor(private _fb: FormBuilder, private _auth: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this._fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this._auth.logIn();
    this.router.navigate(["/board"]);
  }

}
