import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../models/appState';

@Injectable()
export class SearchService {
  constructor(private store: Store<AppState>) {}

  getCurrentValue(): Observable<string> {
    return this.store.select(appState => appState.searchText);
  }
}
