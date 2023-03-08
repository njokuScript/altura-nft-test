import { makeStore } from './makeStore';
import { INFTState } from './types';

const initial_state: INFTState = {
  collection: {},
  NFTs: {},
  error: null,
};

const reducer = async (state: INFTState = initial_state, action: any) => {
  switch (action.type) {
    case actions.GET_NFTS:
      return {
        ...state,
        loading: false,
        nfts: action.payload,
        error: null,
      };
    case actions.GET_COLLECTION:
      return {
        ...state,
        loading: false,
        collection: action.payload,
        error: null,
      };
    case actions.NFT_ERROR:
      return {
        ...state,
        error: action.payload,
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
  GET_NFTS: 'GET_NFTS',
  GET_COLLECTION: 'GET_COLLECTION',
  NFT_ERROR: 'NFT_ERROR',
};
