import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface loginFace {
  message: string,
  success: boolean,
  token: string
}
interface Register {
  message: string,
  success: boolean
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  get isLoggedIn() {
    return this.loggedInStatus;
  }

  getLoginDetails(email, password) {
    return this.http.post<loginFace>('http://localhost:3000/user/login', {
      email,
      password
    });
  }

  register(email, password, name, telephone, birthDay) {
    return this.http.post<Register>('http://localhost:3000/user/signup', {
      email,
      password,
      name,
      telephone,
      birthDay
    });
  }
}
