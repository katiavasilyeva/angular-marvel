import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Language } from '../../models/language';

@Component({
  selector: 'language',
  templateUrl: './language.template.html'
})
export class LanguageComponent {
  @Input() language: Language;

  @Output() onSpanish: EventEmitter<void> = new EventEmitter<void>();

  @Output() onEnglish: EventEmitter<void> = new EventEmitter<void>();

  @Output() onFrench: EventEmitter<void> = new EventEmitter<void>();

  @Output() onResetLanguage: EventEmitter<void> = new EventEmitter<void>();
}
