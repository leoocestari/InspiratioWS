import { Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
