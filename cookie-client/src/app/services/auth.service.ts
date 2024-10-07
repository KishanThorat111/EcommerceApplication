// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   constructor(private apiService: ApiService) {}

//   signIn(credentials: { username: string; password: string }) {
//     // return this.apiService.post('/sign-in', credentials);
//     return this.apiService.post('/sign-in', credentials, { withCredentials: true });
//   }


//   signUp(credentials: { username: string; password: string }) {
//     return this.apiService.post('/sign-up', credentials);
//   }

//   logout() {
//     return this.apiService.post('/logout', {});
//   }

//   isAuthenticated() {
//     return this.apiService.get('/is-authenticated');
//   }
// }


// /////////////
// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthService {
//   constructor(private apiService: ApiService) {}

//   signIn(credentials: { username: string; password: string }) {
//     return this.apiService.post('/sign-in', credentials, { withCredentials: true });
//   }

//   signUp(credentials: { username: string; password: string }) {
//     return this.apiService.post('/sign-up', credentials, { withCredentials: true });
//   }

//   logout() {
//     return this.apiService.post('/logout', {}, { withCredentials: true });
//   }

//   isAuthenticated() {
//     return this.apiService.get('/is-authenticated', { withCredentials: true });
//   }
// }


//not changed
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  signIn(credentials: { username: string; password: string }) {
    return this.apiService.post('/sign-in', credentials);
  }

  signUp(credentials: { username: string; password: string }) {
    return this.apiService.post('/sign-up', credentials);
  }

  logout() {
    return this.apiService.post('/logout', {});
  }

  isAuthenticated() {
    return this.apiService.get('/is-authenticated');
  }
}
