import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'courses', loadChildren: () => import('./courses/courses-routing.module').then(r => r.ROUTERS_COURSES) },
];
