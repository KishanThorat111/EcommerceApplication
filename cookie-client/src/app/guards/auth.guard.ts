import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

// Define the authentication guard function that controls access to routes
export const authGuard: CanActivateFn = (route, state) => {
  // Inject the AuthService and Router using Angular's DI system
  const authService = inject(AuthService) as AuthService;
  const router = inject(Router) as Router;

  // If the current route's path is 'auth', redirect authenticated users to the home page
  if (route.routeConfig?.path === 'auth') {
    return authService.isAuthenticated().pipe(
      map(() => {
        // Navigate to home if user is already authenticated, block access to 'auth' page
        router.navigate(['/home']);
        return false; // Prevent navigation to the 'auth' route
      }),
      catchError(() => {
        // If authentication check fails, allow access to the 'auth' route
        return of(true);
      })
    );
  }

  // For all other routes, ensure the user is authenticated
  return authService.isAuthenticated().pipe(
    map(() => {
      // If authenticated, allow access to the route
      return true;
    }),
    catchError(() => {
      // If not authenticated, redirect to the 'auth' page and deny access to the route
      router.navigate(['/auth']);
      return of(false); // Block access to the current route
    })
  );
};
