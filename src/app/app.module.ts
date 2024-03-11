import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooltostringPipe } from './booltostring.pipe';
import {AgePipe} from "./contact/age.pipe";
import {GenderStyleDirective} from "./contact/gender.style.directive";
import {appRoutes} from "./app-routing.module"
import {ContactModules} from "./contact/contact.modules";



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    AgePipe,
    GenderStyleDirective,
    BooltostringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule,
    ContactModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
