import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./modules/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'csv2json',
    loadComponent: () =>
      import('./modules/csv2json/csv2json.component').then(
        (m) => m.Csv2JsonComponent
      ),
  },
  {
    path: 'corona',
    loadComponent: () =>
      import('./modules/corona/corona.component').then((m) => m.CoronaComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./modules/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'chart',
    loadComponent: () =>
      import('./modules/chart/chart.component').then((m) => m.ChartComponent),
  },
  {
    path: 'who-covid',
    loadComponent: () =>
      import('./modules/who-covid/who-covid.component').then(
        (m) => m.WhoCovidComponent
      ),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
