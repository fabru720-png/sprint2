import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { Registro } from './registro/registro';
import { canActivateAuthGuard } from './auth.guard';



export const AUTH_ROUTES: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: Home, canActivate: [canActivateAuthGuard] },
  {
    path: 'juegos',
    loadChildren: () => import('./juegos/juegos.routes').then(m => m.JUEGOS_ROUTES)
  },
  {
    path: 'chat',
    loadComponent: () => import('./chat/chat/chat').then(m => m.Chat)
  },
  { path: 'login', component: Login },
  { path: 'registro', component: Registro },
  { path: '**', redirectTo: 'login' }
];



