import { Counter } from './counter';
import { Language } from './language';
import { FormGroupState } from 'ngrx-forms';
import { RootForm } from './rootForm';
import { Characters } from './characters';

export interface AppState {
  readonly counter: Counter;
  readonly language: Language;
  readonly searchText: FormGroupState<RootForm>;
  readonly characters: Characters;
}
