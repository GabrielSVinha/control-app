import { MaterialModule } from '@angular/material';
import { TaxiService } from './taxi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TaxiCardComponent } from './taxi-card/taxi-card.component';
import { RouterModule, Routes } from '@angular/router';
import { ROUTING } from '../config/routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TaxiCardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(ROUTING)
  ],
  providers: [TaxiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
