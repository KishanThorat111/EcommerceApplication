// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthComponent } from './pages/auth/auth.component';
// import { HomeComponent } from './pages/home/home.component';
// import { authGuard } from './guards/auth.guard';

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'home',
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//     canActivate: [authGuard],
//   },
//   {
//     path: 'auth',
//     component: AuthComponent,
//     canActivate: [authGuard],
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthComponent } from './pages/auth/auth.component';
// import { HomeComponent } from './pages/home/home.component';
// import { authGuard } from './guards/auth.guard';

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'home',
//   },
//   {
//     path: 'home',
//     component: HomeComponent,
//     canActivate: [authGuard],
//   },
//   {
//     path: 'auth',
//     component: AuthComponent,
//     canActivate: [authGuard],
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Correct import for routing module
  exports: [RouterModule], // Exports RouterModule to make routes available in app
})
export class AppRoutingModule {}






