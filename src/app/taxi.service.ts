import { Taxi } from './../models/taxi';
import { Injectable } from '@angular/core';

@Injectable()
export class TaxiService {

  constructor() { }

  fetchTaxis() {
    return [{
      'name': 'aaaa',
      'phone': '33227315',
      'email': 'g@g.com'
    }];
  }

  approve(taxi: Taxi) {

  }

}
