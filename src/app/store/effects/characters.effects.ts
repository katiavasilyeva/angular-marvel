import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {
  map,
  tap,
  switchMap,
  throttle,
  auditTime,
  mergeMap
} from 'rxjs/operators';
import { CharactersActions } from '../characters/characters.actions';
import { CharactersService } from '../../services/characters.service';
import { reset } from 'ngrx-forms';

@Injectable()
export class CharactersEffects {
  constructor(
    private actions$: Actions,
    private charactersService: CharactersService
  ) {}

  @Effect()
  getCharacters$ = this.actions$.ofType('GET_CHARACTERS').pipe(
    tap(val => {
      console.log('the action is', val);
    }),
    switchMap(action =>
      this.charactersService.fetchCharacters().pipe(
        tap(val => console.log(val)),
        map(res => ({
          type: CharactersActions.GET_CHARACTERS_SUCCESS,
          payload: res['data']['results']
        }))
      )
    )
  );
}
