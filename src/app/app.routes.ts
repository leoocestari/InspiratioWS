import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { RegisterPacientsComponent } from './modules/pages/register-pacients/register-pacients.component';
import { PacientReportComponent } from './modules/pages/pacient-report/pacient-report.component';
import { SuportComponent } from './modules/pages/suport/suport.component';
import { ConsultarComponent } from './modules/pages/consultar/consultar.component';
import { MedicalReportComponent } from './modules/pages/medical-report/medical-report.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register-pacients', component: RegisterPacientsComponent },
  { path: 'medical-report', component: MedicalReportComponent },
  { path: 'pacient-report', component: PacientReportComponent },
  { path: 'suport',  component: SuportComponent },
  { path: 'consultar', component: ConsultarComponent },

];
