// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { inject } from '@angular/core';
// import { catchError, map, of } from 'rxjs';

// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService) as AuthService;
//   const router = inject(Router) as Router;

//   if (route.routeConfig?.path === 'auth') {
//     return authService.isAuthenticated().pipe(
//       map(() => {
//         router.navigate(['/home']);
//         return false;
//       }),
//       catchError(() => {
//         return of(true);
//       })
//     );
//   }

//   return authService.isAuthenticated().pipe(
//     map(() => {
//       return true;
//     }),
//     catchError(() => {
//       router.navigate(['/auth']);
//       return of(false);
//     })
//   );
// };


import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService) as AuthService;
  const router = inject(Router) as Router;

  // Check if the user is trying to access a protected route (like home)
  return authService.isAuthenticated().pipe(
    map((isAuthenticated) => {
      if (isAuthenticated) {
        return true; // Allow navigation to the home page or other protected routes
      } else {
        router.navigate(['/auth']); // Redirect to the login page if not authenticated
        return false; // Prevent navigation to protected routes
      }
    }),
    catchError(() => {
      router.navigate(['/auth']); // Redirect to login on error (e.g., token expired)
      return of(false); // Prevent navigation to protected routes
    })
  );
};



// import { CanActivateFn, Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';
// import { inject } from '@angular/core';
// import { catchError, map, of } from 'rxjs';

// export const authGuard: CanActivateFn = (route, state) => {
//   const authService = inject(AuthService) as AuthService;
//   const router = inject(Router) as Router;

//   // Check if the route is the auth route
//   if (route.routeConfig?.path === 'auth') {
//     return authService.isAuthenticated().pipe(
//       map((isAuthenticated) => {
//         if (isAuthenticated) {
//           // If authenticated, redirect to home and prevent access to auth route
//           router.navigate(['/home']);
//           return false;
//         }
//         // Allow access to auth route if not authenticated
//         return true;
//       }),
//       catchError(() => {
//         return of(true); // Allow access to auth route if there is an error checking authentication
//       })
//     );
//   }

//   // For all other routes (like home)
//   return authService.isAuthenticated().pipe(
//     map((isAuthenticated) => {
//       if (!isAuthenticated) {
//         // If not authenticated, redirect to auth page
//         router.navigate(['/auth']);
//         return false; // Prevent access to the protected route
//       }
//       return true; // Allow access to the protected route
//     }),
//     catchError(() => {
//       router.navigate(['/auth']); // If authentication check fails, redirect to auth
//       return of(false); // Prevent access to the protected route
//     })
//   );
// };
