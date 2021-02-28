import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {}

  public logIn() {
    sessionStorage.setItem('isLogin', "true");
  }

  public logOut() {
    sessionStorage.setItem('isLogin', "false");
  }
}
