import { Component, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TabDirective } from 'ngx-bootstrap/tabs';
import { faSpinner, faThumbtack } from '@fortawesome/free-solid-svg-icons';

import { WhoCovidService } from './who-covid.service';
import { ICountry } from './_models/country';
import { ICountryHistorical } from './_models/countryHistorical';
import { IDayData } from './_models/dayData';
import { IWorld } from './_models/world';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-who-covid',
  templateUrl: './who-covid.component.html',
  styleUrls: ['./who-covid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class WhoCovidComponent implements OnInit {
  faSpinner = faSpinner;
  faPin = faThumbtack;

  apiWaiting = signal(true);
  apiError = signal(false);
  evalAvailable = signal(false);

  evalDays = environment.daysEval;

  coronaCountries = signal<ICountry[]>([]);
  coronaCountry = signal<ICountry | null>(null);
  coronaGlobalNumbers = signal<IWorld | null>(null);
  countryHistorical = signal<ICountryHistorical | null>(null);

  selectedCountryName = signal('');
  selectedCountryIndex = signal(0);
  preferdCountry = signal('');
  preferdIsRefreshed = signal(false);

  coronaChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };

  coronaChartData = signal<any>(null);
  coronaEvalChartData = signal<any>(null);
  coronaChartLabels = signal<string[]>([]);
  coronaChartType = 'line';
  coronaChartLegend = true;

  countryCases = signal<IDayData[]>([]);
  countryDeaths = signal<IDayData[]>([]);
  countryRecovered = signal<IDayData[]>([]);

  countryCasesOnDay = signal<number[]>([]);
  countryDeathsOnDay = signal<number[]>([]);

  globalLastUpdate = signal<Date | null>(null);
  countryLastUpdate = signal<Date | null>(null);

  graphLabel1 = signal('');
  graphLabel2 = signal('');

  constructor(private cs: WhoCovidService, private ts: TranslateService) {}

  ngOnInit(): void {
    this.getGlobalNumbers();
  }

  onSelect(data: TabDirective): void {
    this.evalAvailable.set(false);
    if (data.id === 'status') {
      if (this.preferdCountry() !== '') {
        if (!this.preferdIsRefreshed()) {
          this.preferdIsRefreshed.set(true);
        }
      }
    } else if (data.id === 'graph') {
      this.prepareEvalGraph();
    }
  }

  setDefaultCountry() {
    localStorage.setItem('coronaApi_DefaultCountryName', this.selectedCountryName());
    localStorage.setItem('coronaApi_DefaultCountryIndex', this.selectedCountryIndex().toString());
  }

  getAllCountries() {
    this.apiWaiting.set(true);
    this.cs.getAllCountries().subscribe({
      next: (data: ICountry[]) => {
        this.coronaCountries.set(data);
        const savedCountry = localStorage.getItem('coronaApi_DefaultCountryName');
        const savedIndex = +(localStorage.getItem('coronaApi_DefaultCountryIndex') || '0');

        this.preferdCountry.set(savedCountry || '');

        if (savedCountry) {
          this.selectedCountryName.set(savedCountry);
          this.getCountryDetails(savedIndex);
          this.getHistory(savedCountry);
        } else {
          this.getCountryDetails(0);
        }
        this.apiWaiting.set(false);
      },
      error: (err) => {
        console.error(err);
        this.apiWaiting.set(false);
        this.apiError.set(true);
      },
    });
  }

  getGlobalNumbers() {
    this.apiWaiting.set(true);
    this.cs.getGlobalTableData().subscribe({
      next: (data) => {
        console.log('WHO Global Data:', data);
        this.getAllCountries();
        this.apiWaiting.set(false);
      },
      error: (err) => {
        console.error(err);
        this.apiWaiting.set(false);
        this.apiError.set(true);
      },
    });
  }

  getCountryDetails(indexInList: number) {
    this.countryHistorical.set(null);
    const countries = this.coronaCountries();
    if (countries && countries.length > 0) {
      const country = countries[indexInList];
      this.coronaCountry.set(country);
      this.selectedCountryName.set(country.country);
      this.selectedCountryIndex.set(indexInList);
      this.countryLastUpdate.set(new Date(country.updated));
    }
  }

  getHistory(country: string) {
    this.cs.getCountryHistorical(country, this.evalDays).subscribe({
      next: (data: ICountryHistorical) => {
        this.countryHistorical.set(data);
        this.prepareGraph();
      },
      error: (err) => {
        console.error(err);
        this.coronaGlobalNumbers.set(null);
        this.apiError.set(true);
      },
    });
  }

  prepareGraph() {
    const historical = this.countryHistorical();
    if (!historical) return;

    this.countryCases.set(Object.values(historical.timeline.cases));
    this.countryRecovered.set(Object.values(historical.timeline.recovered));
    this.countryDeaths.set(Object.values(historical.timeline.deaths));

    this.ts.get('CORONA.GraphLabel1').subscribe((res: string) => {
      this.graphLabel1.set(res);
    });
    this.ts.get('CORONA.GraphLabel2').subscribe((res: string) => {
      this.graphLabel2.set(res);
    });

    this.coronaChartData.set([
      { data: this.countryCases(), label: this.graphLabel1() },
      { data: this.countryDeaths(), label: this.graphLabel2() },
    ]);
    this.coronaChartLabels.set(Object.keys(historical.timeline.cases));
  }

  prepareEvalGraph() {
    const cases = this.countryCases();
    const deaths = this.countryDeaths();

    const casesOnDay: number[] = [];
    for (let i = 0; i < cases.length - 2; i++) {
      casesOnDay.push(Number(cases[i + 1]) - Number(cases[i]));
    }

    const deathsOnDay: number[] = [];
    for (let i = 0; i < deaths.length - 2; i++) {
      deathsOnDay.push(Number(deaths[i + 1]) - Number(deaths[i]));
    }

    this.countryCasesOnDay.set(casesOnDay);
    this.countryDeathsOnDay.set(deathsOnDay);

    this.coronaEvalChartData.set([
      { data: casesOnDay, label: this.graphLabel1() },
      { data: deathsOnDay, label: this.graphLabel2() },
    ]);
    this.evalAvailable.set(true);
  }
}
