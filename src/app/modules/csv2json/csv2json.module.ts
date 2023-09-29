import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

import { Csv2JsonRoutingModule } from './csv2json-routing.module';
import { Csv2JsonComponent } from './csv2json.component';

@NgModule({
  declarations: [Csv2JsonComponent],
  imports: [
    CommonModule,
    Csv2JsonRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
})
export class Csv2JsonModule {}
