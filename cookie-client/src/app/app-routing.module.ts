// App Routing Module

// Import necessary Angular modules and components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';  // Import authentication component
import { HomeComponent } from './pages/home/home.component';  // Import home component
import { authGuard } from './guards/auth.guard';  // Import the route guard for authentication

// Define application routes
const routes: Routes = [
  {
    path: '',  // Default route
    pathMatch: 'full',  // Redirect only if the entire path is empty
    redirectTo: 'home',  // Redirect to 'home' route by default
  },
  {
    path: 'home',  // Route to home component
    component: HomeComponent,  // Define the home component to load
    canActivate: [authGuard],  // Protect this route using the authGuard
  },
  {
    path: 'auth',  // Route to authentication (login/sign-up) component
    component: AuthComponent,  // Define the auth component to load
    canActivate: [authGuard],  // Protect this route using the authGuard
  },
];

// Decorator for defining and configuring Angular module
@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Correct import for the routing module
  exports: [RouterModule],  // Exports RouterModule to make routes available in the app
})
export class AppRoutingModule {}  // Export the routing module to use it in the application
