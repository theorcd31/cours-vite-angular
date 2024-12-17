import { Routes } from '@angular/router';
import { ComponentManipComponent } from './tp/component-manip/component-manip.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './tp/data-binding/data-binding.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'app-data-binding', loadComponent: () => import('./tp/data-binding/data-binding.component').then(m => m.DataBindingComponent) },
  { path: 'app-component-manip', loadComponent: () => import('./tp/component-manip/component-manip.component').then(m => m.ComponentManipComponent) },
  { path: 'app-list-friends', loadComponent: () => import('./list-friends/list-friends.component').then(m => m.ListFriendsComponent) },
  { path: '**', loadComponent: () => import('./shared/not-found/not-found.component').then(m => m.NotFoundComponent) },
  
  
];