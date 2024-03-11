import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  LoginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)

  });

  constructor(private router: Router, private aService: AuthService){

  }
  onSubmit(){
    console.log('Email: ', this.LoginForm.value.email);
    console.log('Password: ', this.LoginForm.value.password);
    this.aService.login(this.LoginForm.value.email!,this.LoginForm.value.password!);
    this.router.navigate(['contact']);
  }

}
