import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/appState';
import { createAction } from '../createAction';

@Injectable()
export class CharactersActions {
  static GET_CHARACTERS = 'GET_CHARACTERS';
  static GET_CHARACTERS_SUCCESS = 'GET_CHARACTERS_SUCCESS';
  static GET_CHARACTERS_ERROR = 'GET_CHARACTERS_ERROR';

  constructor(private store: Store<AppState>) {}

  getCharacters() {
    this.store.dispatch(createAction(CharactersActions.GET_CHARACTERS));
  }
}
