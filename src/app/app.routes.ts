import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.routes').then((m) => m.authRoutes),
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/shared/shared.routes').then((m) => m.sharedRoutes),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
