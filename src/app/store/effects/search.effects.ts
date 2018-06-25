import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  map,
  tap,
  switchMap,
  distinctUntilChanged,
  debounceTime,
  mergeMap
} from 'rxjs/operators';
import { CharacterActions } from '../character/character.actions';
import { CharacterService } from '../../services/character.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class SearchEffects {
  constructor(
    private actions$: Actions,
    private characterService: CharacterService,
    private characterActions: CharacterActions
  ) {}
  @Effect()
  searchUpdate$ = this.actions$.ofType('UPDATE_TEXT').pipe(
    tap(val => console.log(val)),
    debounceTime(500),
    switchMap(action =>
      of({ type: 'GET_CHARACTER', payload: action['payload'] })
    )
  );
}
