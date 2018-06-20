import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../models/appState';
import { Characters } from '../models/characters';

@Injectable()
export class CharactersSelector {
  constructor(private store: Store<AppState>) {}

  getCharacters(): Observable<Characters> {
    return this.store.select(appState => appState.characters);
    // .filter(this.isValidValue);
  }
}
