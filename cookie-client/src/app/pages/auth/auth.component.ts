import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  register: boolean = false; // Flag to toggle between Sign-In and Sign-Up mode
  errorMessage: string = ''; // To store error messages for user feedback

  // Initialize the form group with validation rules
  form: FormGroup = this.formBuilder.group({
    username: ['', Validators.required], // Username is required
    password: ['', Validators.required], // Password is required
  });

  constructor(
    private formBuilder: FormBuilder, // Injecting FormBuilder to create forms
    private authService: AuthService,  // Injecting AuthService to handle API calls
    private router: Router             // Injecting Router for navigation
  ) {}

  // Sign up method to register a new user
  signUp(e: Event) {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate form before making a request
    if (this.form.invalid) {
      this.errorMessage = 'Please fill in all the fields.'; // Display error if the form is invalid
      return;
    }

    this.authService.signUp(this.form.value).subscribe({
      next: () => {
        this.form.reset(); // Reset the form on successful registration
        this.register = false; // Switch back to Sign-In mode after successful sign-up
        this.errorMessage = ''; // Clear any existing error messages
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 409) {
          // Handle case where username is already taken
          this.errorMessage = 'User already exists. Please try another username.';
        } else {
          this.errorMessage = 'An error occurred. Please try again.'; // Generic error message for other errors
        }
      },
    });
  }

  // Sign in method to authenticate a user
  signIn(e: Event) {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate form before making a request
    if (this.form.invalid) {
      this.errorMessage = 'Please fill in all the fields.'; // Display error if the form is invalid
      return;
    }

    this.authService.signIn(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/home']); // Navigate to the home page on successful login
        this.errorMessage = ''; // Clear any existing error messages
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Handle case where credentials are incorrect
          this.errorMessage = 'Invalid username or password.';
        } else {
          this.errorMessage = 'An error occurred. Please try again.'; // Generic error message for other errors
        }
      },
    });
  }
}
