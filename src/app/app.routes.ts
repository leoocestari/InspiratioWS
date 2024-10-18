import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { RegisterPacientsComponent } from './modules/pages/register-pacients/register-pacients.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-pacients', component: RegisterPacientsComponent },
];
