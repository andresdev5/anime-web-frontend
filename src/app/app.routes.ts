import { Routes } from '@angular/router';
import homeRoutes from '@app/home/home.routes';


export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('@shared/layouts/default/default-layout.component').then(m => m.DefaultLayoutComponent),
        children: homeRoutes,
    }
];
