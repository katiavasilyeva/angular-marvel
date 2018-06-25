import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { SearchActions } from '../../store/search/search.actions';

@Component({
  template: `<search
  [searchString] = "searchString$ | async"
  (valueChange)="onTextUpdate($event)">
</search>`,
  selector: 'search-container'
})
export class SearchBoxContainer {
  searchString$: Observable<string>;
  constructor(
    searchService: SearchService,
    private searchActions: SearchActions
  ) {
    this.searchString$ = searchService.getCurrentValue();
  }
  onTextUpdate = val => {
    return this.searchActions.updateText(val);
  };
}
