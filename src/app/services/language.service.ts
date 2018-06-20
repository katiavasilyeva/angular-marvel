import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../models/appState';
import { Language } from '../models/language';

@Injectable()
export class LanguageService {
  constructor(private store: Store<AppState>) {}

  getCurrentValue(): Observable<Language> {
    return this.store.select(appState => appState.language);
    // .filter(Boolean);
  }
}
