import { Credentials } from './../../models/credential';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'control-app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials: Credentials;

  constructor(public loginService: LoginService) {
    this.credentials = new Credentials();
  }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.credentials)
      .then(res => {
        localStorage.setItem('currentUser', res);
      })
      .catch(error => {
        console.log(error);
        alert('Ocorreu um erro, por favor tente novamente' + error.message);
      });
  }

}
