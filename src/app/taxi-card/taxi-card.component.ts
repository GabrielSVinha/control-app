import { Taxi } from './../../models/taxi';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-taxi-card',
  templateUrl: './taxi-card.component.html',
  styleUrls: ['./taxi-card.component.css']
})
export class TaxiCardComponent {

  @Input() taxi: Taxi;

  constructor() { }

}
