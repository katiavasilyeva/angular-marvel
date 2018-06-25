import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, tap, switchMap, mergeMap } from 'rxjs/operators';
import { CharactersActions } from '../characters/characters.actions';
import { CharactersService } from '../../services/characters.service';
import { of, Observable } from 'rxjs';

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
    mergeMap(action =>
      this.charactersService.fetchCharacters().pipe(
        tap(val => console.log(val)),
        switchMap(res =>
          of({
            type: CharactersActions.GET_CHARACTERS_SUCCESS,
            payload: res['data']['results']
          })
        )
      )
    )
  );
}
