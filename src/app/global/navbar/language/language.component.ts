import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { BsModalRef } from 'ngx-bootstrap/modal';
import { LanguageService } from '../../language.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-language',
    templateUrl: './language.component.html',
    styleUrls: ['./language.component.css'],
    standalone: true,
    imports: [NgFor, NgIf],
})
export class LanguageComponent implements OnInit {
  title='';
  closeBtnName='';

  languages = [] as any;
  selected = '';

  public onSelected!: Subject<boolean>;

  constructor(
    public bsModalRef: BsModalRef,
    private languageService: LanguageService
  ) {}

  public ngOnInit(): void {
    this.onSelected = new Subject() ;
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected;
  }

  select(lng : string) {
    this.languageService.setLanguage(lng);
    // this.saveSettings();
    // this.popoverCtrl.dismiss();

    this.onSelected.next(true) ;
    this.bsModalRef.hide();
  }
}
