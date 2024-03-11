import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Phone_Diary';
  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {}

  logout(){
    this.authService.logout()
  }
  isAuthenticated(){
    return this.authService.isAuthenticated();
  }
}
