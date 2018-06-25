import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Counter } from '../../models/counter';

@Component({
  selector: 'counter',
  templateUrl: './counter.template.html'
})
export class CounterComponent {
  @Input() counter: Counter;

  @Output() onIncrement: EventEmitter<void> = new EventEmitter<void>();

  @Output() onDecrement: EventEmitter<void> = new EventEmitter<void>();

  @Output() onReset: EventEmitter<void> = new EventEmitter<void>();
}
