// App Configuration Module
// This module configures the application with routing and zone change detection settings.

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  // Setting up providers for zone change detection and routing
  providers: [
    // Enables zone change detection with event coalescing to optimize performance
    provideZoneChangeDetection({ eventCoalescing: true }), 
    // Configures the router with defined routes
    provideRouter(routes)
  ]
};
