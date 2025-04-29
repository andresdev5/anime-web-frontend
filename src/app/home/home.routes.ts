import { Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/home/pages/home/home-page.component').then(m => m.HomePageComponent),
    }
]

export default routes;
