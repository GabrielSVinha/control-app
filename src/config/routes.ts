import { PageNotFoundComponent } from './../app/page-not-found/page-not-found.component';
import { HomeComponent } from './../app/home/home.component';
import { Routes } from '@angular/router';

export const ROUTING: Routes = [
    {path: '', component: HomeComponent},
    { path: '**', component: PageNotFoundComponent }
];
