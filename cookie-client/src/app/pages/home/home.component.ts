// HomeComponent: This component handles the home page functionality, including user logout.

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Importing the AuthService to manage authentication.
import { Router } from '@angular/router'; // Importing the Router for navigation.

@Component({
  selector: 'app-home', // Component selector for usage in HTML.
  templateUrl: './home.component.html', // HTML template for the component.
  styleUrls: ['./home.component.scss'], // Styles specific to this component.
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {} // Dependency injection of AuthService and Router.

  // Method to handle user logout.
  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/auth']); // Navigate to the authentication page upon successful logout.
      },
      error: (error) => {
        console.error(error); // Log any errors that occur during logout.
      },
    });
  }
}
