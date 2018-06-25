import { RouterModule, Routes } from '@angular/router';
import { CounterContainer } from './components/counter/counter.container';
import { SearchBoxContainer } from './components/search-box/search-box.container';
import { LanguageContainer } from './components/language/language.container';
import { CharactersContainer } from './components/characters/characters.container';

const routes: Routes = [
  { path: 'languages', component: LanguageContainer },
  { path: 'counter', component: CounterContainer },
  { path: 'search', component: SearchBoxContainer },
  { path: 'characters', component: CharactersContainer }
];

export const routing = RouterModule.forRoot(routes);
