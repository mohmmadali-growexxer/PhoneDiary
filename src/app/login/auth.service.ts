import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn: boolean = false;
  token: string | null = null;
  users: { email: string, password: string }[] = [
    { email: 'admin@123.com', password: 'test123' },
    { email: 'rahul@gmail.com', password: 'rahul123' },
    { email: 'admin@gmail.com', password: 'test123' },
    { email: 'ali@123.com', password: '1234' },
  ];

  constructor(private http: HttpClient) {
    // Check if user is already logged in from previous session
    const storedToken = sessionStorage.getItem('token');
    if (storedToken) {
      this.loggedIn = true;
      this.token = storedToken;
    }
  }

  login(email: string, password: string) {
    const user = this.users.find(user => user.email === email && user.password === password);
    if (user) {
      this.loggedIn = true;
      this.token = 'sampleToken'; // Generate token if necessary

      // Store token in session storage
      sessionStorage.setItem('token', this.token);
    } else {
      this.loggedIn = false;
      this.token = null;
    }
  }

  logout() {
    this.loggedIn = false;
    this.token = null;

    // Clear token from session storage
    sessionStorage.removeItem('token');
  }

  isAuthenticated() {
    return this.loggedIn;
  }
}
