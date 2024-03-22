import { Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {LandingComponent} from './landing/landing.component';



export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'admin', component: AdminComponent }
  ];

