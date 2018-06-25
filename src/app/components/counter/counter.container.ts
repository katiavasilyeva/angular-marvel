import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Counter } from '../../models/counter';
import { CounterService } from '../../services/counter.service';
import { CounterActions } from '../../store/counter/counter.actions';

@Component({
  template: `<counter [counter]="counter$ | async" (onIncrement)="counterActions.increment()"
  (onDecrement)="counterActions.decrement()"
  (onReset)="counterActions.reset()">
</counter>`,
  selector: 'counter-container'
})
export class CounterContainer {
  counter$: Observable<Counter>;
  constructor(
    counterService: CounterService,
    public counterActions: CounterActions
  ) {
    this.counter$ = counterService.getCurrentValue();
  }
}
