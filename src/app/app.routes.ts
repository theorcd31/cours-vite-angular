import { Routes } from '@angular/router';
import { ComponentManipComponent } from './tp/component-manip/component-manip.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './tp/data-binding/data-binding.component';
import { AuthGuardService } from './services/auth-guard.service';
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'app-register', loadComponent: () => import('./register/register.component').then(m => m.RegisterComponent) },
  { path: 'app-login', loadComponent: () => import('./login/login.component').then(m => m.LoginComponent) },
  { path: 'app-data-binding', canActivate: [AuthGuardService], loadComponent: () => import('./tp/data-binding/data-binding.component').then(m => m.DataBindingComponent) },
  { path: 'app-directives', canActivate: [AuthGuardService], loadComponent: () => import('./tp/directives/directives.component').then(m => m.DirectivesComponent) },
  { path: 'app-pokemon-list', canActivate: [AuthGuardService], loadComponent: () => import('./pokemon-list/pokemon-list.component').then(m => m.PokemonListComponent) },
  { path: 'app-blog-control-center', canActivate: [AuthGuardService], loadComponent: () => import('./blog-control-center/blog-control-center.component').then(m => m.BlogControlCenterComponent) },
  { path: 'app-component-manip', canActivate: [AuthGuardService], loadComponent: () => import('./tp/component-manip/component-manip.component').then(m => m.ComponentManipComponent) },
  { path: 'app-list-friends', canActivate: [AuthGuardService], loadComponent: () => import('./list-friends/list-friends.component').then(m => m.ListFriendsComponent) },
  { path: 'app-profile-manager', canActivate: [AuthGuardService], loadComponent: () => import('./profile-manager/profile-manager.component').then(m => m.ProfileManagerComponent) },
  { path: 'app-profil-details/:id', canActivate: [AuthGuardService], loadComponent: () => import('./profil-details/profil-details.component').then(m => m.ProfilDetailsComponent) },
  { path: 'app-profil-details/:id', canActivate: [AuthGuardService], loadComponent: () => import('./profil-details/profil-details.component').then(m => m.ProfilDetailsComponent) },
  { path: 'app-communication', canActivate: [AuthGuardService], loadComponent: () => import('./tp/communication/communication.component').then(m => m.CommunicationComponent) },
  { path: 'app-observable', canActivate: [AuthGuardService], loadComponent: () => import('./tp/observable/observable.component').then(m => m.ObservableComponent) },
  { path: 'app-pipes', canActivate: [AuthGuardService], loadComponent: () => import('./pipes/pipes.component').then(m => m.PipesComponent) },
  { path: 'app-profile-user', canActivate: [AuthGuardService], loadComponent: () => import('./profile-user/profile-user.component').then(m => m.ProfileUserComponent) },
  { path: 'app-signals', canActivate: [AuthGuardService], loadComponent: () => import('./signals/signals.component').then(m => m.SignalsComponent) },
  { path: 'app-task-list-firebase', canActivate: [AuthGuardService], loadComponent: () => import('./task-list-firebase/task-list-firebase.component').then(m => m.TaskListFirebaseComponent) },
  { path: '**', loadComponent: () => import('./shared/not-found/not-found.component').then(m => m.NotFoundComponent) },
  
  
];