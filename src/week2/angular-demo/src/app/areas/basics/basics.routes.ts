import { Routes } from '@angular/router';
import { Home } from './home';
export const BasicsRoutes: Routes = [
  {
    path: '',
    component: Home,
    children: [],
  },
];
