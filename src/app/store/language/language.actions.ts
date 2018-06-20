import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { createAction } from '../createAction';
import { AppState } from '../../models/appState';

@Injectable()
export class LanguageActions {
  static SPANISH = 'SPANISH';
  static ENGLISH = 'ENGLISH';
  static FRENCH = 'FRENCH';
  static DEFAULT = 'DEFAULT';

  constructor(private store: Store<AppState>) {}

  spanishMessage() {
    this.store.dispatch(createAction(LanguageActions.SPANISH, 'Hola Mundo!'));
  }
  englishMessage() {
    this.store.dispatch(createAction(LanguageActions.ENGLISH, 'Hello World!'));
  }
  frenchMessage() {
    this.store.dispatch(
      createAction(LanguageActions.FRENCH, 'Bonjour tout le monde!')
    );
  }
  resetMessage() {
    this.store.dispatch(createAction(LanguageActions.DEFAULT, 'UNKNOWN'));
  }
}
