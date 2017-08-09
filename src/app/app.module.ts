import { LoginService } from './login.service';
import { firebaseConfig } from './../config/firebaseConfig';
import { MaterialModule } from '@angular/material';
import { TaxiService } from './taxi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as firebase from 'firebase';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TaxiCardComponent } from './taxi-card/taxi-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from '../config/routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardDirective } from './auth-guard.directive';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TaxiCardComponent,
    PageNotFoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(ROUTING)
  ],
  providers: [
    TaxiService,
    AuthGuardDirective,
    LoginService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
