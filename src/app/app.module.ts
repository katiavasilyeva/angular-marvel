import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/rootReducer';
import { CounterActions } from './store/counter/counter.actions';
import { CounterService } from './services/counter.service';
import { LanguageActions } from './store/language/language.actions';
import { LanguageService } from './services/language.service';
import { LanguageContainer } from './components/language/language.container';
import { CounterComponent } from './components/counter/counter.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { routing } from './app.routes';
import { CounterContainer } from './components/counter/counter.container';
import { LanguageComponent } from './components/language/language.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './components/character/character.component';
import { CharactersContainer } from './components/characters/characters.container';
import { CharactersService } from './services/characters.service';
import { CharactersActions } from './store/characters/characters.actions';
import { CharactersSelector } from './selectors/characters.selector';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CharactersEffects } from './store/effects/characters.effects';
// decorator function, convert a simple class into an angular module
@NgModule({
  declarations: [
    AppComponent,
    LanguageComponent,
    LanguageContainer,
    CounterComponent,
    SearchBoxComponent,
    CounterContainer,
    CharactersComponent,
    CharacterComponent,
    CharactersContainer
  ],
  imports: [
    routing,
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    }),
    EffectsModule.forRoot([CharactersEffects])
  ],
  providers: [
    CounterActions,
    CounterService,
    LanguageActions,
    LanguageService,
    CharactersService,
    CharactersActions,
    CharactersSelector
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
