import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'crud-map',
        loadComponent: () => import('./crud-map/crud-map.component'),
        children: [
            {
                path: 'log-in',
                title: 'Log In',
                loadComponent: () => import('./crud-map/pages/log-in/log-in.component'),
            },
            {
                path: 'view-clients',
                title: 'View Client',
                loadComponent: () => import('./crud-map/pages/view-clients/view-clients.component'),
            },
            {
                path: 'create-client',
                title: 'Create Client',
                loadComponent: () => import('./crud-map/pages/create-client/create-client.component'),
            },
            {
                path: 'update-client/:',
                title: 'Update Client',
                loadComponent: () => import('./crud-map/pages/update-client/update-client.component'),
            },
            {
                path: '', redirectTo: 'create-client', pathMatch: 'full',
            }
        ]
    }, 
    {
        path: '**',
        redirectTo: 'crud-map'
    }
    


];
