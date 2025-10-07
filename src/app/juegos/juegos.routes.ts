import { Routes } from '@angular/router';
import { canActivateAuthGuard } from '../auth.guard';

export const JUEGOS_ROUTES: Routes = [
  {
    path: 'ahorcado',
    loadComponent: () => import('./ahorcado/ahorcado').then(m => m.Ahorcado),
    canActivate: [canActivateAuthGuard]
  },
  {
    path: 'mayor-menor',
    loadComponent: () => import('./mayor-menor/mayor-menor').then(m => m.MayorMenor),
    canActivate: [canActivateAuthGuard]
  }
];

