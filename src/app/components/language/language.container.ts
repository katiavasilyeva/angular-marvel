import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Language } from '../../models/language';
import { LanguageService } from '../../services/language.service';
import { LanguageActions } from '../../store/language/language.actions';

@Component({
  template: `<language [language]="language$ | async" (onEnglish)="languageActions.englishMessage()" (onSpanish)="languageActions.spanishMessage()"
  (onFrench)="languageActions.frenchMessage()" (onResetLanguage)="languageActions.resetMessage()">
</language>`,
  selector: 'language-container'
})
export class LanguageContainer {
  language$: Observable<Language>;
  constructor(
    languageService: LanguageService,
    public languageActions: LanguageActions
  ) {
    this.language$ = languageService.getCurrentValue();
  }
}
