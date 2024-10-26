import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { RegisterPacientsComponent } from './modules/pages/register-pacients/register-pacients.component';
import { PacientReportComponent } from './modules/pages/pacient-report/pacient-report.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-pacients', component: RegisterPacientsComponent },
  { path: 'pacient-report', component: PacientReportComponent },
];
