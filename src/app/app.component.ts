import { Component, OnInit } from '@angular/core';
import { LanguageService } from './global/language.service';
import { FooterComponent } from './global/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './global/navbar/navbar.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        NavbarComponent,
        RouterOutlet,
        FooterComponent,
    ],
})
export class AppComponent implements OnInit {
  constructor(private ls: LanguageService) {}

  ngOnInit() {
    this.ls.setInitialAppLanguage();
  }
}
