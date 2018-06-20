import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Characters } from '../../models/characters';
import { CharactersActions } from '../../store/characters/characters.actions';
import { Observable } from 'rxjs';
import { CharactersSelector } from '../../selectors/characters.selector';
@Component({
  selector: 'characters-container',
  template: `<characters [characters]="characters$ | async"></characters>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharactersContainer {
  characters$: Observable<Characters>;
  constructor(
    private charactersActions: CharactersActions,
    private charactersSelector: CharactersSelector
  ) {
    this.charactersActions.getCharacters();
    this.characters$ = this.charactersSelector.getCharacters();
  }
}
