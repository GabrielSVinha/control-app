import { Taxi } from './../../models/taxi';
import { TaxiService } from './../taxi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public taxis: Array<Taxi>;
  constructor(private taxiService: TaxiService) { }

  ngOnInit() {
    this.taxis = new Array<Taxi>();
    for (let taxi of this.taxiService.fetchTaxis()){
      let new_taxi =  new Taxi(taxi.email, taxi.name, taxi.phone);
      this.taxis.push(new_taxi);
    }
  }

  showCard(taxi: Taxi) {
    taxi.show = ! taxi.show;
  }

  approve(taxi: Taxi) {
    this.taxiService.approve(taxi);
  }

}
