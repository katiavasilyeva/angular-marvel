import { counterReducer } from './counter/counter.reducer';
import { languageReducer } from './language/language.reducer';
import { charactersReducer } from './characters/characters.reducers';

export const rootReducer = {
  counter: counterReducer,
  language: languageReducer,
  characters: charactersReducer
};
