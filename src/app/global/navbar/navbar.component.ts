import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBars, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { LanguageComponent } from './language/language.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class NavbarComponent {
  bsModalRef?: BsModalRef;
  faBars = faBars;
  faGlobe = faGlobe;

  constructor(
    private modalService: BsModalService,
    private ts: TranslateService
  ) {}

  onLanguageModal() {
    const lblTitle = this.ts.instant('NAVBAR.LanguageModalTitle');
    const lblCloseBtnName = this.ts.instant('NAVBAR.LanguageModalCloseBtnName');

    const initialState = {
      title: lblTitle,
      closeBtnName: lblCloseBtnName,
    };
    this.bsModalRef = this.modalService.show(LanguageComponent, {
      initialState,
    });
  }
}
