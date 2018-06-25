import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, switchMap, tap, catchError } from 'rxjs/operators';
import { CharacterActions } from '../character/character.actions';
import { CharacterService } from '../../services/character.service';
import { Observable, of } from 'rxjs';

@Injectable()
export class CharacterEffects {
  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}
  @Effect()
  getCharacter$ = this.actions$.ofType('GET_CHARACTER').pipe(
    tap(val => console.log('GET CHARACTER')),
    switchMap(action =>
      this.characterService.fetchCharacter(action['payload']).pipe(
        map(res => ({
          type: CharacterActions.GET_CHARACTER_SUCCESS,
          payload: res['data']['results']
        })),
        catchError(err => of({ type: 'GET_CHARACTER_ERROR', payload: err }))
      )
    )
  );
}
