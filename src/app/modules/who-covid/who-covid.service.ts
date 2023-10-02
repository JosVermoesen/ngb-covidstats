import { ICountryHistorical } from './_models/countryHistorical';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICountry } from './_models/country';
import { IWorld } from './_models/world';
import { GlobalTableData } from './_models/globaltabledata';

@Injectable()
export class WhoCovidService {
  // till 2022: baseUrl = 'https://corona.lmao.ninja/v2/';
  baseUrl = 'https://disease.sh/v3/covid-19/';
  globalTableUrl = '';

  constructor(private csHttp: HttpClient) {}

  getGlobalTableData() {
    this.csHttp
      .get<GlobalTableData>(this.globalTableUrl, {
        responseType: 'json',
      })
      .subscribe({
        next: (data) => {
          return data;
        },
        error: (error) => {
          return 'There was an error!';
        },
        complete: () => {
          console.log('completed');
        },
      });
  }
  getGlobal(): Observable<IWorld> {
    return this.csHttp.get<IWorld>(this.baseUrl + 'all');
  }

  getAllCountries(): Observable<ICountry[]> {
    return this.csHttp.get<ICountry[]>(this.baseUrl + 'countries');
  }

  getSingleCountry(country: string): Observable<ICountry> {
    return this.csHttp.get<ICountry>(this.baseUrl + 'countries/' + country);
  }

  getCountryHistorical(
    country: string,
    lastDays: number
  ): Observable<ICountryHistorical> {
    return this.csHttp.get<ICountryHistorical>(
      this.baseUrl + 'historical/' + country + '?lastdays=' + lastDays
    );
  }
}
