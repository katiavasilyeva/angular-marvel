import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search-box.template.html'
})
export class SearchBoxComponent {
  @Input() searchString: string;

  @Output() valueChange = new EventEmitter();

  valueChanged = event => {
    this.valueChange.emit(event.target.value);
  };
}
