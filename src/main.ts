import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Ajusta la ruta según la estructura de tu proyecto



bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
