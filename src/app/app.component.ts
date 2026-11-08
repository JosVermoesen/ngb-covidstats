import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LanguageService } from './global/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AppComponent implements OnInit {
  constructor(private ls: LanguageService) {}

  ngOnInit() {
    this.ls.setInitialAppLanguage();
  }
}
