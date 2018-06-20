import { Action } from '@ngrx/store';
import { CounterActions } from './counter.actions';
import { Counter, setCounterValue } from '../../models/counter';

export function counterReducer(
  counter: Counter = { currentValue: 0 },
  action: Action
): Counter {
  switch (action.type) {
    case CounterActions.INCREMENT:
      return setCounterValue(counter, counter.currentValue + 1);
    case CounterActions.DECREMENT:
      return setCounterValue(counter, counter.currentValue - 1);
    case CounterActions.RESET:
      return setCounterValue(counter, 0);
    default:
      return counter;
  }
}
