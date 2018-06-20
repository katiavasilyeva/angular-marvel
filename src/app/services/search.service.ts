import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../models/appState';
import { FormGroupState } from 'ngrx-forms';
import { RootForm } from '../models/rootForm';

@Injectable()
export class SearchService {
  constructor(private store: Store<AppState>) {}

  getCurrentValue(): Observable<FormGroupState<RootForm>> {
    return this.store.select(appState => appState.searchText);
    // .filter(this.isValidValue);
  }
}
