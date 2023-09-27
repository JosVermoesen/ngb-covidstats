# ngb-coronastats - API demo using Angular

## Update API after 2 years

After 2 years, the API will be updated to include more data and more features.
Disease_stats.json is the current data.
For more information: [https://disease.sh](https://disease.sh)

```bash
baseUrl = 'https://corona.lmao.ninja/v2/';
```

as of 2022, refers to data to another API...

```bash
baseUrl = 'https://disease.sh/v3/covid-19/';
```

## Getting started for users

Live version here: [site](https://coronastats.vsoft.be)

## API Sources used for this app

Before 2022:

- [NovelCOVID/API](https://github.com/novelcovid/api)
- [API Reference](https://corona.lmao.ninja/docs/)

Since 2022:

- [COVID-19 API](https://disease.sh/v3/covid-19/)
- [API Reference](https://disease.sh/docs/)

## Getting started for developers

- [Install NodeJS](https://nodejs.org/). Hint: eventually install and use [nvm](https://medium.com/@Joachim8675309/installing-node-js-with-nvm-4dc469c977d9) for easy installing and/or switching between node versions
- Clone this repository: `git clone https://github.com/JosVermoesen/ngb-corona`.
- Run `npm install` inside the project root.
- Run `ng serve` in a terminal from the project root.
- Profit. :tada:

## Development Tools used for this app

- [NodeJS](https://nodejs.org/)
- <https://github.com/coreybutler/nvm-windows/releases>
- <https://gist.github.com/LayZeeDK/c822cc812f75bb07b7c55d07ba2719b3>
- [Visual Studio Code](https://code.visualstudio.com/)
- [Angular CLI](https://www.npmjs.com/package/@angular/cli): `npm i -g @angular/cli`

## NPM packages used for this app

- [bootstrap 4](https://www.npmjs.com/package/bootstrap): `npm i bootstrap@4`
- [bootswatch 4](https://www.npmjs.com/package/bootswatch): `npm i bootswatch@4`
- [jquery](https://www.npmjs.com/package/jquery): `npm i jquery`
- [fontawesome angular](https://www.npmjs.com/package/@fortawesome/angular-fontawesome): `npm i @fortawesome/angular-fontawesome`
- [fontawesome svg core](https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core): `npm i @fortawesome/fontawesome-svg-core`
- [fontawesome free sold svg icons](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons): `npm i @fortawesome/free-solid-svg-icons`
- [bootstrap icons](https://www.npmjs.com/package/bootstrap-icons): `npm i bootstrap-icons`
- [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap): `npm i ngx-bootstrap`
- [@ngx-translate/core](https://www.npmjs.com/package/@ngx-translate/core): `npm i @ngx-translate/core`
- [@ngx-translate/http-loader](https://www.npmjs.com/package/@ngx-translate/http-loader): `npm i @ngx-translate/http-loader`

- install all packages in one commandline: `npm i bootstrap@4 bootswatch@4 jquery @fortawesome/angular-fontawesome @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons bootstrap-icons ngx-bootstrap @ngx-translate/core @ngx-translate/http-loader`

## file styles.css

For use of bootstrap, add into file styles.css:

```bash
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```

## warnings for chart.js

In angular.json, to avoid CommonJs warnings in development mode, add **allowedCommonJsDependencies** in the options section for **chart.js**:

```bash
"builder": "@angular-devkit/build-angular:browser",
          "options": {
            // other
            "allowedCommonJsDependencies": [
              "chart.js"
            ],
            // other
```

## file angular.json scripts

For use of js from bootstrap and jquiry, add into scripts section:

```bash
"scripts": [
              "./node_modules/jquery/dist/jquery.min.js",
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
```

## tsconfig.json changes for using version stamp in app

Before building, set resolveJsonModule to 'true' :

```bash
"compilerOptions": {
    // other
    "resolveJsonModule": true,
    // other
```

## Good practice 1: use lazy loading modules

- Ex. corona module: `ng generate module modules/corona --route corona --module app.module`

### update app to latest Angular 16

This app is on Angular 16. Update to latest Angular 16:
`ng update @angular/cli@16 @angular/core@16`

### update from older Angular versions to the latest

Follow the instructions in the [Angular Update Guide](https://update.angular.io/) to fix your app.

#### npm outdated

In terminal use `npm outdated` to see what packages are requiring updates and what their current and wanted versions are.

This will also show you which packages are deprecated.

If you want to update a package to a version newer than what is specified in your package.json, you can do so by running npm update [package-name]@[version-number].

### Use latest global Angular CLI

`npm i -g @angular/cli`
