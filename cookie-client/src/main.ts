// Bootstrap File for Angular Application
// This file is responsible for bootstrapping the Angular application by 
// loading the root module (AppModule) and initializing the application.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Bootstrap the Angular application
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); // Handle any errors during the bootstrapping process
