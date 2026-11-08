import { Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

const LNG_KEY = 'SELECTED_LANGUAGE';

export interface Language {
  text: string;
  subtext: string;
  value: string;
  img: string;
  enabled: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  readonly selected = signal<string>('');
  private readonly languages = [
    {
      text: 'Nederlands',
      subtext: 'België, Nederland',
      value: 'nl',
      img: 'assets/images/flags/nl.png',
      enabled: true,
    },
    {
      text: 'Français',
      subtext: 'La Belgique, La France',
      value: 'fr',
      img: 'assets/images/flags/fr.png',
      enabled: true,
    },
    {
      text: 'Deutsch',
      subtext: 'Ostbelgien, Deutschland',
      value: 'de',
      img: 'assets/images/flags/de.png',
      enabled: true,
    },
    {
      text: 'English',
      subtext: 'Ireland, United Kingdom',
      value: 'en',
      img: 'assets/images/flags/ie.png',
      enabled: true,
    },
  ];

  constructor(private translate: TranslateService) {}

  setInitialAppLanguage() {
    const language = this.translate.getBrowserLang() || 'nl';
    this.translate.setDefaultLang(language);

    const val = localStorage.getItem(LNG_KEY);
    if (val) {
      this.setLanguage(val);
    } else {
      this.selected.set(language);
    }
  }

  getLanguages(): Language[] {
    return this.languages;
  }

  setLanguage(lng: string) {
    this.translate.use(lng);
    this.selected.set(lng);
    localStorage.setItem(LNG_KEY, lng);
  }
}
