import { HttpClient } from '@angular/common/http';
import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { csv2json } from 'csvjson-csv2json';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-csv2json',
  templateUrl: './csv2json.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class Csv2JsonComponent {
  assetsUrl = 'assets/who-covid-19-data/import/';
  csvContent = '';
  jsonContent = '';
  jsonArray: any[] = [];
  busy = signal(false);
  rowsMessage = '';

  csvUrl = 'WHO-COVID-19-global-table-data';

  constructor(private http: HttpClient, private ts: TranslateService) {}

  loadCsvConvert2JsonAndSave() {
    this.busy.set(true);
    this.http
      .get(this.assetsUrl + this.csvUrl + '.csv', {
        responseType: 'text',
      })
      .subscribe({
        next: (data) => {
          this.rowsMessage = ' converting ' + data.length + ' rows';
          this.csvContent = data;
          this.jsonArray = csv2json(this.csvContent, { parseNumbers: true });
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
        complete: () => {
          console.log('completed');
          this.jsonContent = JSON.stringify(this.jsonArray);
          this.saveJsonFile();
        },
      });
  }

  async saveJsonFile() {
    const blob = new Blob([this.jsonContent], { type: 'application/json' });
    saveAs(blob, this.csvUrl + '.json');
    this.busy.set(false);
  }
}
