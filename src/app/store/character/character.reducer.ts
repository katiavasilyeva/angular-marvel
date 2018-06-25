import { CharacterActions } from './character.actions';
import { initialState } from '../characters/characters.reducers';
import { ActionWithPayload } from '../actionWithPayload';

export const characterReducer = (
  state = initialState,
  action: ActionWithPayload
) => {
  switch (action.type) {
    case CharacterActions.GET_CHARACTER:
      return { ...state, pending: true };
    case CharacterActions.GET_CHARACTER_ERROR:
      return { ...state, error: true, pending: false };
    case CharacterActions.GET_CHARACTER_SUCCESS:
      return { ...state, data: action.payload, pending: false, error: false };
    default:
      return state;
  }
};
