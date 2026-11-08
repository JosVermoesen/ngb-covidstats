import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient, withInterceptorsFromDi, withXhr } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';

import { LanguageService } from './global/language.service';
import { LanguageComponent } from './global/navbar/language/language.component';
import { FooterComponent } from './global/footer/footer.component';
import { NavbarComponent } from './global/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LanguageComponent,
    FooterComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule,
    CarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    ModalModule,
    FontAwesomeModule,
    AppRoutingModule,
  ],
  providers: [
    LanguageService,
    BsModalRef,
    provideCharts(withDefaultRegisterables()),
    provideHttpClient(withXhr(), withInterceptorsFromDi()),
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
})
export class AppModule {}
