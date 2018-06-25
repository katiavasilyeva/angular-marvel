import { counterReducer } from './counter/counter.reducer';
import { languageReducer } from './language/language.reducer';
import { charactersReducer } from './characters/characters.reducers';
import { characterReducer } from '../store/character/character.reducer';
import { searchReducer } from '../store/search/search.reducer';

export const rootReducer = {
  counter: counterReducer,
  language: languageReducer,
  characters: charactersReducer,
  character: characterReducer,
  searchText: searchReducer
};
