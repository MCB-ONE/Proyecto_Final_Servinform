import { Dictionaries } from "./dictionaries.models";
import * as fromActions from './dictionaries.actions';

export interface DictionariesState {
  entity: Dictionaries | null;
  loading: boolean | null;
  error?: string | null;
}

export const initialState: DictionariesState = {
  entity: null,
  loading: false,
  error: null
}

export function reducer(state = initialState, action: fromActions.All | any):
 DictionariesState {
  switch (action.type) {
    // INIT ACTIONS
    case fromActions.Types.READ: {
      return {
        ...state,
        loading: true,
        error: null
      };
    }
    case fromActions.Types.READ_SUCCESS: {
      return {
        ...state,
        loading: false,
        entity: action.dictionaries,
        error: null
      };
    }
    case fromActions.Types.READ_ERROR: {
      return {
        ...state,
        loading: false,
        entity: null,
        error: action.error
      };
    }
    default: {
      return state;
    }
  }
}
