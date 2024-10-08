// AppComponent - Main application component for the Angular app
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Selector for the root component
  templateUrl: './app.component.html', // Template URL for the component's HTML
  styleUrls: ['./app.component.scss'], // Stylesheet URL for the component's styles
})
export class AppComponent {
  title = 'cookie-client'; // Property to hold the title of the application

  constructor() {} // Constructor for the AppComponent
}