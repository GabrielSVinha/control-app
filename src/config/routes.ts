import { PageNotFoundComponent } from './../app/page-not-found/page-not-found.component';
import { HomeComponent } from './../app/home/home.component';
import { Routes } from '@angular/router';
import { AuthGuardDirective } from '../app/auth-guard.directive';
import { LoginComponent } from '../app/login/login.component';
export const ROUTING: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuardDirective] },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PageNotFoundComponent }
];
