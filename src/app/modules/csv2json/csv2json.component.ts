import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { csv2json } from 'csvjson-csv2json';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-csv2json',
  templateUrl: './csv2json.component.html',
})
export class Csv2JsonComponent {
  csvContent = '';
  jsonContent = '';
  jsonArray: any[];
  busy = false;
  rowsMessage = '';

  // assetsUrl = 'WHO-COVID-19-BE-data';
  // assetsUrl = 'WHO-COVID-19-DE-data';
  // assetsUrl = 'WHO-COVID-19-FR-data';
  // assetsUrl = 'WHO-COVID-19-GB-data';
  // assetsUrl = 'WHO-COVID-19-NL-data';
  assetsUrl = 'WHO-COVID-19-LU-data';

  constructor(private http: HttpClient, private ts: TranslateService) {}

  loadCsvConvert2JsonAndSave() {
    this.busy = true;
    this.http
      .get('assets/' + this.assetsUrl + '.csv', {
        responseType: 'text',
      })
      .subscribe({
        next: (data) => {
          this.rowsMessage = ' converting ' + data.length + ' rows';
          this.csvContent = data;
          this.jsonArray = csv2json(this.csvContent);
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
    saveAs(blob, this.assetsUrl + '.json');
    this.busy = false;
  }
}
