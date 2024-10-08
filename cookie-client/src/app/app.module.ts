import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './pages/auth/auth.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({ declarations: [AppComponent, AuthComponent, HomeComponent],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module'; // Ensure this is correct
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { AppComponent } from './app.component';
// import { AuthComponent } from './pages/auth/auth.component';
// import { HomeComponent } from './pages/home/home.component';

// @NgModule({
//   declarations: [AppComponent, AuthComponent, HomeComponent],
//   imports: [
//     BrowserModule, // Ensure AppRoutingModule is included here
//     FormsModule,
//     AppRoutingModule,
//     ReactiveFormsModule,
//     FontAwesomeModule,
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}

////////////////////////////////////////////
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from './app-routing.module'; // Make sure this path is correct
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// import { AppComponent } from './app.component';
// import { AuthComponent } from './pages/auth/auth.component';
// import { HomeComponent } from './pages/home/home.component';

// @NgModule({
//   declarations: [AppComponent, AuthComponent, HomeComponent],
//   imports: [
//     BrowserModule,
//     AppRoutingModule, // Include the correct AppRoutingModule here
//     HttpClientModule,
//     FormsModule,
//     ReactiveFormsModule,
//     FontAwesomeModule,
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}


// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // New way to provide HttpClient

// import { AppComponent } from './app.component';
// import { AuthComponent } from './pages/auth/auth.component';
// import { HomeComponent } from './pages/home/home.component';

// @NgModule({
//   declarations: [AppComponent, AuthComponent, HomeComponent],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     ReactiveFormsModule,
//     FontAwesomeModule,
//   ],
//   providers: [
//     provideHttpClient(withInterceptorsFromDi()), // New way to configure HttpClient
//   ],
//   bootstrap: [AppComponent],
// })
// export class AppModule {}
