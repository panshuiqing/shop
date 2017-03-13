import { Routes } from '@angular/router'
import { SaleComponent } from '../sale';

export const HomeRoutes: Routes = [
  { path: '', component: SaleComponent },
  { path: 'sale', component: SaleComponent }
];