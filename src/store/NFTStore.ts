import { makeStore } from './makeStore';
import type { IAction, INFTState, ICollectionResponse } from './types';

const initial_state: INFTState = {
  collection: {} as ICollectionResponse,
  NFTs: {
    cursor: '',
    data: [],
  },
  error: null,
};

const reducer = (state: INFTState = initial_state, action: IAction) => {
  switch (action.type) {
    case actions.GET_NFTS:
      const NftObj = { ...state.NFTs, ...action.payload };
      console.log(NftObj, 'nft from reducer');
      return {
        ...state,
        loading: false,
        NFTs: NftObj,
        error: null,
      };
    case actions.GET_COLLECTION:
      const CollectionObj = { ...state.collection, ...action.payload };
      return {
        ...state,
        loading: false,
        collection: CollectionObj,
        error: null,
      };
    case actions.NFT_ERROR:
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
  GET_NFTS: 'GET_NFTS',
  GET_COLLECTION: 'GET_COLLECTION',
  NFT_ERROR: 'NFT_ERROR',
  CLEAR_ERRORS: 'CLEAR_ERRORS',
};
