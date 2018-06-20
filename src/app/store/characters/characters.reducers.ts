import { CharactersActions } from './characters.actions';
import { ActionWithPayload } from '../actionWithPayload';
import { Characters } from '../../models/characters';

export const initialState = {
  data: [],
  error: null,
  pending: false
};
export function charactersReducer(
  state: Characters = {
    data: [],
    error: null,
    pending: false
  },
  action: ActionWithPayload
) {
  switch (action.type) {
    case CharactersActions.GET_CHARACTERS:
      return { ...state, pending: true, error: null };
    case CharactersActions.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        pending: false,
        error: false,
        data: action.payload
      };
    case CharactersActions.GET_CHARACTERS_ERROR:
      return { ...state, pending: false, error: action.payload };
    default:
      return state;
  }
}
