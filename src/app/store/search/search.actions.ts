import { Store } from '@ngrx/store';
import { AppState } from '../../models/appState';
import { createAction } from '../createAction';

export class SearchActions {
  static UPDATE_TEXT = 'UPDATE_TEXT';
  static SUBMIT_SUCCESS = 'SUBMIT_SUCCESS';
  static SUBMIT_ERROR = 'SUBMIT_ERROR';
  static FETCHING = 'FETCHING';

  constructor(private store: Store<AppState>) {}

  updateText(text) {
    this.store.dispatch(createAction(SearchActions.UPDATE_TEXT, text));
  }
}
