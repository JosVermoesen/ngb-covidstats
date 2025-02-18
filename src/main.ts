import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { createTranslateLoader } from './app/app.module';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { withInterceptorsFromDi, provideHttpClient, HttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { LanguageService } from './app/global/language.service';

bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, CarouselModule.forRoot(), TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }), ModalModule.forRoot(), FontAwesomeModule, AppRoutingModule),
        LanguageService,
        BsModalRef,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
    ]
})
  .catch((err) => console.error(err));
