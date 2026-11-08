import { provideZoneChangeDetection } from "@angular/core";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppModule } from './app/app.module';
import { APP_ROUTES } from './app/app.routes';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

platformBrowserDynamic()
  .bootstrapModule(AppModule, { 
    applicationProviders: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideAnimations(),
      provideRouter(APP_ROUTES, withHashLocation(), withInMemoryScrolling({ scrollPositionRestoration: 'top' })),
      provideHttpClient(withXhr(), withInterceptorsFromDi()),
      provideCharts(withDefaultRegisterables()),
      { provide: LocationStrategy, useClass: HashLocationStrategy },
    ], 
  })
  .catch((err) => console.error(err));
