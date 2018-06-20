import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { createAction } from '../createAction';
import { AppState } from '../../models/appState';

@Injectable()
export class CounterActions {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';
  static RESET = 'RESET';

  constructor(private store: Store<AppState>) {}

  increment() {
    this.store.dispatch(createAction(CounterActions.INCREMENT));
  }
  decrement() {
    this.store.dispatch(createAction(CounterActions.DECREMENT));
  }
  reset() {
    this.store.dispatch(createAction(CounterActions.RESET));
  }
}
