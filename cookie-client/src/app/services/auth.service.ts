// AuthService - Service for handling authentication-related operations
// This service provides methods for user sign-in, sign-up, logout, and checking authentication status.

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  // Method to sign in a user with provided credentials
  // Sends a POST request to the '/sign-in' endpoint
  signIn(credentials: { username: string; password: string }) {
    return this.apiService.post('/sign-in', credentials);
  }

  // Method to sign up a new user with provided credentials
  // Sends a POST request to the '/sign-up' endpoint
  signUp(credentials: { username: string; password: string }) {
    return this.apiService.post('/sign-up', credentials);
  }

  // Method to log out the current user
  // Sends a POST request to the '/logout' endpoint
  logout() {
    return this.apiService.post('/logout', {});
  }

  // Method to check if the user is authenticated
  // Sends a GET request to the '/is-authenticated' endpoint
  isAuthenticated() {
    return this.apiService.get('/is-authenticated');
  }
}
