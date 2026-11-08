import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LanguageService } from '../../language.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class LanguageComponent implements OnInit {
  @Input() title = '';
  @Input() closeBtnName = '';

  languages: any[] = [];
  selected = '';

  constructor(
    public bsModalRef: BsModalRef,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languages = this.languageService.getLanguages();
    this.selected = this.languageService.selected();
  }

  select(lng: string) {
    this.languageService.setLanguage(lng);
    this.bsModalRef.hide();
  }
}
