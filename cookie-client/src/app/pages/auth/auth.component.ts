// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-auth',
//   templateUrl: './auth.component.html',
//   styleUrl: './auth.component.scss',
// })
// export class AuthComponent {
//   constructor(
//     private formBuilder: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {}

//   register: boolean = false;

//   form: FormGroup = this.formBuilder.group({
//     username: ['', Validators.required],
//     password: ['', Validators.required],
//   });

//   signUp(e: Event) {
//     e.preventDefault();

//     this.authService.signUp(this.form.value).subscribe({
//       next: () => {
//         this.form.reset();
//         this.register = false;
//       },
//       error: (error: HttpErrorResponse) => {
//         console.error(error);
//       },
//     });
//   }

//   signIn(e: Event) {
//     e.preventDefault();

//     this.authService.signIn(this.form.value).subscribe({
//       next: () => {
//         this.router.navigate(['/home']);
//       },
//       error: (error: HttpErrorResponse) => {
//         console.error(error);
//       },
//     });
//   }
// }

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-auth',
//   templateUrl: './auth.component.html',
//   styleUrls: ['./auth.component.scss'],
// })
// export class AuthComponent {
//   register: boolean = false;
//   errorMessage: string = ''; // To store error messages

//   form: FormGroup = this.formBuilder.group({
//     username: ['', Validators.required],
//     password: ['', Validators.required],
//   });

//   constructor(
//     private formBuilder: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {}

//   signUp(e: Event) {
//     e.preventDefault();

//     this.authService.signUp(this.form.value).subscribe({
//       next: () => {
//         this.form.reset();
//         this.register = false;
//         this.errorMessage = ''; // Clear error on success
//       },
//       error: (error: HttpErrorResponse) => {
//         if (error.status === 409) {
//           // 409: Conflict (e.g., user already exists)
//           this.errorMessage = 'User already exists. Please try another username.';
//         } else {
//           this.errorMessage = 'An error occurred. Please try again.';
//         }
//       },
//     });
//   }

//   signIn(e: Event) {
//     e.preventDefault();

//     this.authService.signIn(this.form.value).subscribe({
//       next: () => {
//         this.router.navigate(['/home']);
//         this.errorMessage = ''; // Clear error on success
//       },
//       error: (error: HttpErrorResponse) => {
//         if (error.status === 401) {
//           // 401: Unauthorized (e.g., wrong credentials)
//           this.errorMessage = 'Invalid username or password.';
//         } else {
//           this.errorMessage = 'An error occurred. Please try again.';
//         }
//       },
//     });
//   }
// }



// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';
// import { HttpErrorResponse } from '@angular/common/http';

// @Component({
//   selector: 'app-auth',
//   templateUrl: './auth.component.html',
//   styleUrls: ['./auth.component.scss'],
// })
// export class AuthComponent {
//   register: boolean = false;
//   errorMessage: string = ''; // To store error messages

//   form: FormGroup = this.formBuilder.group({
//     username: ['', Validators.required],
//     password: ['', Validators.required],
//   });

//   constructor(
//     private formBuilder: FormBuilder,
//     private authService: AuthService,
//     private router: Router
//   ) {}

//   signUp(e: Event) {
//     e.preventDefault();

//     this.authService.signUp(this.form.value).subscribe({
//       next: () => {
//         this.form.reset();
//         this.register = false;
//         this.errorMessage = ''; // Clear error on success
//       },
//       error: (error: HttpErrorResponse) => {
//         if (error.status === 409) {
//           // 409: Conflict (e.g., user already exists)
//           this.errorMessage = 'User already exists. Please try another username.';
//         } else {
//           this.errorMessage = 'An error occurred. Please try again.';
//         }
//       },
//     });
//   }

//   signIn(e: Event) {
//     e.preventDefault();

//     this.authService.signIn(this.form.value).subscribe({
//       next: () => {
//         this.router.navigate(['/home']);
//         this.errorMessage = ''; // Clear error on success
//       },
//       error: (error: HttpErrorResponse) => {
//         if (error.status === 401) {
//           // 401: Unauthorized (e.g., wrong credentials)
//           this.errorMessage = 'Invalid username or password.';
//         } else {
//           this.errorMessage = 'An error occurred. Please try again.';
//         }
//       },
//     });
//   }
// }

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
  register: boolean = false;
  errorMessage: string = ''; // To store error messages

  form: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  // Sign up method
  signUp(e: Event) {
    e.preventDefault();

    // Validate form before making a request
    if (this.form.invalid) {
      this.errorMessage = 'Please fill in all the fields.';
      return;
    }

    this.authService.signUp(this.form.value).subscribe({
      next: () => {
        this.form.reset();
        this.register = false;
        this.errorMessage = ''; // Clear error on success
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 409) {
          // 409: Conflict (e.g., user already exists)
          this.errorMessage = 'User already exists. Please try another username.';
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
        }
      },
    });
  }

  // Sign in method
  signIn(e: Event) {
    e.preventDefault();

    // Validate form before making a request
    if (this.form.invalid) {
      this.errorMessage = 'Please fill in all the fields.';
      return;
    }

    this.authService.signIn(this.form.value).subscribe({
      next: () => {
        this.router.navigate(['/home']);
        this.errorMessage = ''; // Clear error on success
      },
      error: (error: HttpErrorResponse) => {
        if (error.status === 401) {
          // 401: Unauthorized (e.g., wrong credentials)
          this.errorMessage = 'Invalid username or password.';
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
        }
      },
    });
  }
}
