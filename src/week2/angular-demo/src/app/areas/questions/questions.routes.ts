import { Routes } from '@angular/router';
import { Questions } from './questions';
export const QuestionRoutes: Routes = [
  {
    path: '',
    component: Questions,
    children: [],
  },
];
