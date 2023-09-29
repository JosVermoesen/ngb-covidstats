import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import csv2json from 'csvjson-csv2json';
// Use the csv2json library here

@Component({
  selector: 'app-csv2json',
  templateUrl: './csv2json.component.html',
})
export class Csv2JsonComponent {
  csvContent = '';
  jsonContent = '';
  busy = false;

  constructor(private http: HttpClient, private ts: TranslateService) {}

  loadCsvExampleFromAssets() {
    this.busy = true;
    this.http
      .get('assets/WHO-COVID-19-global-data.csv', {
        responseType: 'text',
      })
      .subscribe((data) => {
        const json = csv2json(data);
        console.log(json);
        this.busy = false;
      });
  }
}
