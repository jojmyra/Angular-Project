import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getLoginDetails(username, password) {
    return this.http.post('http://localhost:1234/api/login', {
      username,
      password
    }).subscribe(data => {
      console.log(data, ' is what we get from data');
    });
  }
}
