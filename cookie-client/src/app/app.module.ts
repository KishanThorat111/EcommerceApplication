// AppModule Configuration
// This module serves as the root module for the Angular application, 
// importing necessary modules and declaring components.

import { NgModule } from '@angular/core'; // Importing NgModule to create an Angular module
import { BrowserModule } from '@angular/platform-browser'; // Importing BrowserModule for web app support

import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'; // Importing HttpClient setup
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importing modules for form handling
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; // Importing FontAwesome for icons
import { AppRoutingModule } from './app-routing.module'; // Importing routing module for navigation
import { AppComponent } from './app.component'; // Importing the root application component
import { AuthComponent } from './pages/auth/auth.component'; // Importing the authentication component
import { HomeComponent } from './pages/home/home.component'; // Importing the home component

@NgModule({
    // Declaring the components used in the module
    declarations: [AppComponent, AuthComponent, HomeComponent],
    // Specifying the root component to bootstrap the application
    bootstrap: [AppComponent],
    // Importing necessary modules for the application
    imports: [
        BrowserModule, // Required for running the application in a web browser
        AppRoutingModule, // Contains the routing configuration
        FontAwesomeModule, // Allows usage of FontAwesome icons
        FormsModule, // Enables template-driven forms
        ReactiveFormsModule, // Enables reactive forms
    ],
    // Providing the HttpClient with interceptors from the DI
    providers: [provideHttpClient(withInterceptorsFromDi())] 
})
// Exporting the AppModule class to be used in other parts of the application
export class AppModule {}
