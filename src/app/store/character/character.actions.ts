import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../models/appState';
import { createAction } from '../../store/createAction';
import { SearchService } from '../../services/search.service';

@Injectable()
export class CharacterActions {
  static GET_CHARACTER = 'GET_CHARACTER';
  static GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS';
  static GET_CHARACTER_ERROR = 'GET_CHARACTER_ERROR';

  constructor(private store: Store<AppState>) {}

  getCharacter = text => {
    this.store.dispatch(createAction(CharacterActions.GET_CHARACTER, text));
  };
}
