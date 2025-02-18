import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { csv2json } from 'csvjson-csv2json';
import { saveAs } from 'file-saver';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-csv2json',
    templateUrl: './csv2json.component.html',
    standalone: true,
    imports: [NgIf],
})
export class Csv2JsonComponent {
  assetsUrl = 'assets/who-covid-19-data/import/';
  csvContent = '';
  jsonContent = '';
  jsonArray: any[];
  busy = false;
  rowsMessage = '';

  // csvUrl = 'WHO-COVID-19-BE-data';
  // csvUrl = 'WHO-COVID-19-DE-data';
  // csvUrl = 'WHO-COVID-19-FR-data';
  // csvUrl = 'WHO-COVID-19-GB-data';
  // csvUrl = 'WHO-COVID-19-NL-data';
  // csvUrl = 'WHO-COVID-19-LU-data';
  csvUrl = 'WHO-COVID-19-global-table-data';

  constructor(private http: HttpClient, private ts: TranslateService) {}

  loadCsvConvert2JsonAndSave() {
    this.busy = true;
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
          // console.log(this.jsonContent);
        },
      });
  }

  async saveJsonFile() {
    const finished = (error: any) => {
      if (error) {
        console.log('failed');
        console.log(error);
      } else {
        console.log('finished');
      }
    };

    const blob = new Blob([this.jsonContent], { type: 'application/json' });
    saveAs(blob, this.csvUrl + '.json');
    this.busy = false;
  }
}
