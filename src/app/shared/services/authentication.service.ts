import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {}

  public logIn(): void {
    sessionStorage.setItem('isLogin', "true");
  }

  public logOut() {
    sessionStorage.clear();
  }

  public loggedIn() {
    return !!sessionStorage.getItem('isLogin');
  }
}
