import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserProfileComponent } from '../browser-profile/pages/browser-profile/browser-profile.component';
import { ProxyServiceComponent } from '../proxy-service/pages/proxy-service/proxy-service.component';

export const sharedRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'proxy-service',
        component: ProxyServiceComponent,
      },
      { path: '', component: BrowserProfileComponent, pathMatch: 'full' },
    ],
  },
];
