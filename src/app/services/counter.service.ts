import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../models/appState';
import { Counter } from '../models/counter';

@Injectable()
export class CounterService {
  constructor(private store: Store<AppState>) {}

  getCurrentValue(): Observable<Counter> {
    return this.store.select(appState => appState.counter);
    // .filter(this.isValidValue);
  }
}
