import { actions, useDispatch, useStore } from '../store/NFTStore';
import React from 'react';
import { AlturaApi, attachLoader, Blockspan, handleError } from '../libs/utils';

export const useNFT = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState({});
  const activate = attachLoader(setLoading);

  /**
   * @dev Gets collection data for an address
   * @param address Address of the specified collection
   * @returns Transaction response
   */
  const getCollection = activate('collections', async (address: string) => {
    console.log('get collections');
    console.log(process.env.REACT_APP_BLOCKSPAN_API_BASE_URL, 'api url');
    try {
      const response = await Blockspan.get(
        `/collections/contract/${address}?chain=eth=main`
      );
      console.log(response);

      dispatch({ type: actions.GET_COLLECTION, payload: response.data });
    } catch (err) {
      handleError(err);
    }
  });
  const getNfts = activate('collection', async (address: string) => {
    try {
      const response = await Blockspan.get(`/collection/${address}`);
      dispatch({ type: actions.GET_NFTS, payload: response.data });
    } catch (err) {
      handleError(err);
    }
  });
  return {
    collection: store.collection,
    nfts: store.NFTs,
    error: store.error,
    getCollection,
    getNfts,
    loading: loading,
  };
};
