import { actions, useDispatch, useStore } from '../store/NFTStore';
import React from 'react';
import { AlturaApi, attachLoader, Blockspan, handleError } from '../libs/utils';
import { ILoading } from '../store/types';

export const useNFT = () => {
  const store = useStore();
  const dispatch = useDispatch();

  const initialLoading = {
    collection: false,
    NFTs: false,
  };

  const [loading, setLoading] = React.useState<ILoading>(initialLoading);
  const activate = attachLoader(setLoading);

  /**
   * @dev Gets collection data for an address
   * @param address Address of the specified collection
   * @returns Collection response
   */
  const getCollection = activate('collection', async (address: string) => {
    try {
      const response = await Blockspan.get(
        `/collections/contract/${address}?chain=eth-main`
      );
      console.log(response.data);

      dispatch({ type: actions.GET_COLLECTION, payload: response.data });
      console.log(await store.collection, 'collection from store');
    } catch (err: any) {
      handleError(err);
      dispatch({
        type: actions.NFT_ERROR,
        payload: err?.response?.data?.errors[0]?.msg,
      });
    }
  });
  const getNfts = activate('NFTs', async (address: string) => {
    try {
      const response = await Blockspan.get(`/collection/${address}`);
      dispatch({ type: actions.GET_NFTS, payload: response.data });
    } catch (err: any) {
      handleError(err);
    }
  });

  // Clear Errors
  const clearErrors = () => dispatch({ type: actions.CLEAR_ERRORS });
  return {
    collection: store.collection,
    nfts: store.NFTs,
    error: store.error,
    getCollection,
    getNfts,
    loading: loading,
    clearErrors,
  };
};
