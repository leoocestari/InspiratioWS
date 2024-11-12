import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { LoginComponent } from './modules/pages/login/login.component';
import { RegisterPacientsComponent } from './modules/pages/register-pacients/register-pacients.component';
import { PacientReportComponent } from './modules/pages/pacient-report/pacient-report.component';
import { SuportComponent } from './modules/pages/suport/suport.component';
import { ConsultarComponent } from './modules/pages/consultar/consultar.component';
import { MedicalReportComponent } from './modules/pages/medical-report/medical-report.component';
import { UnauthenticatedLayoutComponent } from './layouts/unauthenticated-layout/unauthenticated-layout.component';
import { AuthenticatedLayoutComponent } from './layouts/authenticated-layout/authenticated-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: UnauthenticatedLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./modules/pages/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
    ],
  },
  {
    path: '',
    component: AuthenticatedLayoutComponent,
    
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register-pacients', component: RegisterPacientsComponent },
      { path: 'medical-report', component: MedicalReportComponent },
      { path: 'pacient-report', component: PacientReportComponent },
      { path: 'suport', component: SuportComponent },
      { path: 'consultar', component: ConsultarComponent },
    ],
  },
  //{ path: '**', redirectTo: '/login' },
];
