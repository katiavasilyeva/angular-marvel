import { SearchActions } from './search.actions';
import { ActionWithPayload } from '../actionWithPayload';

const initialState = {
  searchText: ''
};

export const searchReducer = (
  state = initialState,
  action: ActionWithPayload
) => {
  switch (action.type) {
    case SearchActions.UPDATE_TEXT:
      return { ...state, searchText: action.payload };
    default:
      return state;
  }
};
