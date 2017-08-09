import firebase from 'firebase';
import { Taxi } from '../models/taxi';
import { Injectable } from '@angular/core';
import { RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';
import { Credentials } from '../models/credential';

@Injectable()
export class LoginService {

  options: RequestOptions;

  constructor() {
    this.generateOptions();

    firebase.auth().onAuthStateChanged((user) => {
    });

    firebase.auth().onIdTokenChanged(token => {
      if (token) {
        this.generateOptions(token);
      }
    });
  }

  login(credentials: Credentials) {
    return firebase.auth().signInWithEmailAndPassword(credentials.email.trim().toLowerCase(), credentials.password);
  }

  loginWithGoogle() {
    return firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  generateOptions(token?) {
    let options = new RequestOptions();

    options.headers = new Headers();
    if (token) {
      options.headers.set('Authorization', 'Bearer ' + token);
    }

    this.options = options;
  }

  logout() {
    firebase.auth().signOut();
  }

}
