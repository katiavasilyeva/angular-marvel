import { Store } from '@ngrx/store';
import { AppState } from '../../models/appState';
import { createAction } from '../createAction';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchActions {
  static UPDATE_TEXT = 'UPDATE_TEXT';

  constructor(private store: Store<AppState>) {}

  updateText(text) {
    this.store.dispatch(createAction(SearchActions.UPDATE_TEXT, text));
  }
}
