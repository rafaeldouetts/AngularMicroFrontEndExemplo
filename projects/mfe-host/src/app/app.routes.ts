import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'profile',
        loadComponent: () => loadRemoteModule('mfe1', './Component')
        .then((m) => m.AppComponent)
    }
];
