export interface IWorld {
  updated: number;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  affectedCountries: number;
}
// https://corona.lmao.ninja/all
// use jsontots.com to set up the model with ease!
// https://corona.lmao.ninja/v3/covid-19/all seems not working from 2023 march
