import { makeStore } from './makeStore';
import { ICollectionState } from './types';

const initial_state: ICollectionState = {
  collection: {},
  collections: [],
  error: null,
};

const reducer = async (
  state: ICollectionState = initial_state,
  action: any
) => {
  switch (action.type) {
    case actions.GET_COLLECTIONS:
      return {
        ...state,
        loading: false,
        collections: action.payload,
        error: null,
      };
    case actions.GET_COLLECTION:
      return {
        ...state,
        loading: false,
        collection: action.payload,
        error: null,
      };
    case actions.GET_COLLECTION_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case actions.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const { Provider, useStore, useDispatch } = makeStore(
  initial_state,
  reducer
);
export const actions = {
  GET_COLLECTIONS: 'GET_COLLECTIONS',
  GET_COLLECTION: 'GET_COLLECTION',
  GET_COLLECTION_ERROR: 'GET_COLLECTION_ERROR',
  CLEAR_ERRORS: 'CLEAR_ERRORS',
};
